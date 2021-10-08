import DisplayWorkout from "./DisplayWorkout"

function Welcome( {workouts} ) {
    console.log(workouts)
    const displayWorkouts = workouts.map(workout => {
        return <DisplayWorkout key={workout.id} workout={workout}/>
    })

    return (
        <div>
            You are logged in!
            {displayWorkouts}
        </div>
    )
}

export default Welcome