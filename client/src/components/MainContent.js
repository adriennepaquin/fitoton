import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import NotFound from './NotFound'

function MainContent(user, setUser) {
    return (
        <div>
            Main Content
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/signup">
                    <Signup setUser={setUser}/>
                </Route>
                <Route exact path="/login">
                    <Login setUser={setUser}/>
                </Route>
                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    )
}

export default MainContent