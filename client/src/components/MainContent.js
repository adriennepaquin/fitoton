import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import NotFound from './NotFound'
import Welcome from './Welcome'

function MainContent({user, setUser, workouts}) {
    console.log(user)
    return (
        <div>
            Main Content
            <Switch>
                <Route exact path="/">
                    {user ? <Redirect to="/welcome"/> : <Home user={user}/>}
                </Route>
                <Route exact path="/signup">
                    <Signup setUser={setUser}/>
                </Route>
                <Route exact path="/login">
                    <Login user={user} setUser={setUser}/>
                </Route>
                <Route exact path="/welcome">
                    <Welcome workouts={workouts}/>
                </Route>
                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    )
}

export default MainContent