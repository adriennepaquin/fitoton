import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home() {

    return (
        <Container>
            <Row>
                <h1>Welcome to Fit-O-Ton!</h1>
            </Row>
            <Row>
                <Col>
                    <h3>Get your FIT ON with Fit-O-Ton!</h3>
                    <p>Do you find your fitness gives you up?</p>
                    <p>Sick of fitness programs letting you down?</p>
                    <p>Want instructors who will never run around or desert you?</p>
                    <h3>FIT-O-TON has what you need!</h3>
                    <p>Our instructors will make you cry... with joy!</p>
                    <p>At the end of a workout, you will always be sorry to say goodbye.</p>
                    <p>Hey - we are not telling a lie. We wouldn't want to hurt you!</p>
                    <h2>Sign up today!</h2>

                </Col>
                <Col>
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/01-new-parents-camera-1-0329-223m-2-1556740677.jpg?crop=0.760xw:0.609xh;0,0.0617xh&resize=980:*" />
                    <h3>Ride your bike from the comfort of your home,</h3>
                    <h3>or enjoy a yoga class or strength workout.</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default Home