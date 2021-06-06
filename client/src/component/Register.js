import React from "react"
import {Redirect} from "react-router-dom"
import Axios from "axios";
import './css-work/register.css'

export default class Login extends React.Component{

    constructor(){
        super()
        let loggedIn = false
        
        // const token = localStorage.getItem("token")
        // if(token) loggedIn = true

        this.state = {
            username: "",
            email:"",
            password: "",
            loggedIn,
            error: ""
        }
        this.onChange =  this.onChange.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
    }

    onChange(ev){
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    async formSubmit(ev){
        ev.preventDefault()
        const {username,email, password} = this.state
        try {
            const token = await Axios.post("/reg", {username,email, password})
            // localStorage.setItem("token", token)
            this.setState({
                loggedIn: true
            })
        } catch (err) {
            this.setState({
                error: err.message
            })
        }
    }

    render(){
        if(this.state.loggedIn === true){
            return <Redirect to="/" />
        }
        return(
            <div className="continor" >
                <div className="form">
                <h1 className="head" > Register </h1>

            <form onSubmit={this.formSubmit}>
            <div className="input">
                <input className="in" type="text" placeholder="Username" value={this.state.username} onChange={this.onChange} name="username" />
                </div>    
                
                <div className="input">
                <input className="in" type="text" placeholder="Email" value={this.state.email} onChange={this.onChange} name="email" />
                </div>

                <div className="input">
                <input className="in" type="password" placeholder="Password" value={this.state.password} onChange={this.onChange} name="password" />
                </div>

                <div className="button">
                <button type="submit" > Submit </button>
                </div>
                {this.state.error}
            </form>
            </div>
            {/* <button> Register </button> */}
            </div>
        )
    }
}