import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import NotFound from './NotFound'
import Welcome from './Welcome'
import Workouts from './Workouts'

function MainContent({user, setUser, workouts, myWorkouts, setMyWorkouts}) {
    // console.log(user)
    return (
        <div>
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
                    {user ? <Welcome user={user} workouts={workouts} myWorkouts={myWorkouts} setMyWorkouts={setMyWorkouts}/> : <Redirect to="/"/>}
                </Route>
                <Route exact path="/workouts">
                    {/* {user ? <Workouts user={user} workouts={workouts}/> : <Redirect to="/"/>} */}
                    <Workouts user={user} workouts={workouts}/>
                </Route>
                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    )
}

export default MainContent