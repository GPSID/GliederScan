import {Switch, Route} from 'react-router-dom'
import Forgot from './components/Forgot/Forgot';
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";


const Routes = () => {
    return(
    <Switch>
        <Route path = '/login'>
            <Login />
        </Route>
        <Route path = '/forgot'><Forgot /></Route>
        <Route path ='/'><Home /></Route>
    </Switch>
    )
}
export default Routes