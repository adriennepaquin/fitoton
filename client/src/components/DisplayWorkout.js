import Card from 'react-bootstrap/Card'

function DisplayWorkout({workout}) {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img className="in-image" variant="top" src={workout.instructor.photo_url} />
            <Card.Body>
                <Card.Title>{workout.category.name}</Card.Title>
                <Card.Text>
                    <p>{workout.name}</p>
                    <p>with: {workout.instructor.name}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default DisplayWorkout