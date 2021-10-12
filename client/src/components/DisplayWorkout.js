import Card from 'react-bootstrap/Card'

function DisplayWorkout({workout}) {
    return(
        <Card>
            <Card.Body>
                <Card.Text>
                    <p>{workout.category.name}</p>
                    <img src={workout.instructor.photo_url}/>
                    <p>{workout.name}</p>
                    <p>with: {workout.instructor.name}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default DisplayWorkout