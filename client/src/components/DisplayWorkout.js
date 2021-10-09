function DisplayWorkout({workout}) {
    return(
        <div>
            {workout.name}
            {workout.instructor}
            {workout.length}
        </div>
    )
}

export default DisplayWorkout