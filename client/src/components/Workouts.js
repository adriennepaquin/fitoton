import DisplayWorkout from './DisplayWorkout'
// import Filter from './Filter'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'

function Workouts( {user, workouts} ) {

    const displayWorkouts = workouts.map(work => {
        return <DisplayWorkout key={work.name} workout={work}/>
    })
    console.log(user)

    return (
        <Container>
            <Row>
                <Col sm={3}>
                    <h3>Filter Workouts By:</h3>
                    <Dropdown className="d-inline mx-2">
                        <Dropdown.Toggle className="button" id="dropdown-button-dark-example1" variant="secondary">
                            Length
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item >5</Dropdown.Item>
                            <Dropdown.Item >10</Dropdown.Item>
                            <Dropdown.Item >15</Dropdown.Item>
                            <Dropdown.Item >20</Dropdown.Item>
                            <Dropdown.Item >30</Dropdown.Item>
                            <Dropdown.Item >45</Dropdown.Item>
                            <Dropdown.Item >60</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="d-inline mx-2">
                        <Dropdown.Toggle className="button" id="dropdown-button-dark-example1" variant="secondary">
                            Class Type
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item >Cycling</Dropdown.Item>
                            <Dropdown.Item >Yoga</Dropdown.Item>
                            <Dropdown.Item >Strength</Dropdown.Item>
                            <Dropdown.Item >Meditation</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="d-inline mx-2">
                        <Dropdown.Toggle className="button" id="dropdown-button-dark-example1" variant="secondary">
                            Instructor
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item >Alex</Dropdown.Item>
                            <Dropdown.Item >Anna</Dropdown.Item>
                            <Dropdown.Item >Christine</Dropdown.Item>
                            <Dropdown.Item >Cody</Dropdown.Item>
                            <Dropdown.Item >Jess</Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <Row>
                        <h2>All Workouts</h2>
                    </Row>
                    <Row xs={1} md={2} className="g-4">
                        {displayWorkouts}
                    </Row>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Workouts