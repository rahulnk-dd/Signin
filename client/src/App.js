import logo from './logo.svg';
import './App.css';
import{Switch , Route} from 'react-router-dom'
import Login from './component/Login';
import User from './component/User';
import Logout from './component/Logout';
import Register from './component/Register'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/user' component={User} />
      <Route path='/logout' component={Logout} />
      <Route path='/reg' component={Register} />
    </Switch>
  );
}

export default App;
