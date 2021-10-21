import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
                <Button className="button" variant="dark" href={workout.video_url}>Start Workout</Button>
            </Card.Body>
        </Card>
    )
}

export default DisplayWorkout