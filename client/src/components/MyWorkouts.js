import DisplayWorkout from "./DisplayWorkout"

function MyWorkouts( {user, myWorkouts}) {

    const displayMyWorkouts = myWorkouts.map(myWork => {
        return <DisplayWorkout key={myWork.name} workout={myWork}/>
    })

    return (
        <div>
            <h2>{user.name}'s Workouts</h2>
            {displayMyWorkouts}
        </div>
    )
}

export default MyWorkouts