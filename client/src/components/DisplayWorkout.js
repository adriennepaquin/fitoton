import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const CardStyle = styled.div`
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    button {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 0px;
    }
`

function DisplayWorkout({workout}) {

    function handleClick() {
        console.log("click")
    }

    return(
        <CardStyle>
            {/* <Card style={{ width: '18rem' }}> */}
            <Card>
                <Card.Img className="in-image" variant="top" src={workout.instructor.photo_url} />
                <Card.Body>
                    <Card.Title>
                        <h2>{workout.category.name}</h2>
                    </Card.Title>
                    <Card.Text>
                        <p>{workout.name}</p>
                        <p>with: {workout.instructor.name}</p>
                    </Card.Text>
                    <Button onClick={handleClick} className="button" variant="dark" href={workout.video_url} target="_blank">Play Workout</Button>
                </Card.Body>
            </Card>
        </CardStyle>
    )
}

export default DisplayWorkout