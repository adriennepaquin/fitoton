import { useState, useEffect } from 'react'
import DisplayWorkout from "./DisplayWorkout"

function Welcome( {user, workouts, myWorkouts, setMyWorkouts} ) {

    // fetch user's workouts
    useEffect(() => {
        const token = localStorage.getItem("token")
        fetch(`http://localhost:3000/workouts/${user.id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            setMyWorkouts(data)
            console.log(data)
        })
    }, [])

    const displayMyWorkouts = myWorkouts.map(myWork => {
        return <DisplayWorkout key={myWork.id} workout={myWork}/>
    })

    const displayWorkout1 = workouts[workouts.length - 1]
    const displayWorkout2 = workouts[workouts.length - 2]
    const displayWorkout3 = workouts[workouts.length - 3]
    const displayWorkout4 = workouts[workouts.length - 4]

    return (
        <div>
            You are logged in!
            <div>
                Explore new workouts:
                {displayWorkout1 ? <DisplayWorkout workout={displayWorkout1}/> : null}
                {displayWorkout2 ? <DisplayWorkout workout={displayWorkout2}/> : null}
                {displayWorkout3 ? <DisplayWorkout workout={displayWorkout3}/> : null}
                {displayWorkout4 ? <DisplayWorkout workout={displayWorkout4}/> : null}
            </div>
            <div>
                Your recent workouts:
                {displayMyWorkouts}
            </div>
            
        </div>
    )
}

export default Welcome