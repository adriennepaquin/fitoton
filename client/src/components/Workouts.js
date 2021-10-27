import DisplayWorkout from './DisplayWorkout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Workouts( {user, workouts} ) {

    const displayWorkouts = workouts.map(work => {
        return <DisplayWorkout key={work.name} workout={work}/>
    })
    console.log(user)

    return (
        <Container>
            <Row>
                <h2>All Workouts</h2>
            </Row>
            <Row xs={1} md={2} className="g-4">
                {displayWorkouts}
            </Row>
        </Container>
    )
}

export default Workouts