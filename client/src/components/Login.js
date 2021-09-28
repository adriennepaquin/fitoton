import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

function Login({ setUser }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    const history = useHistory()

    // log in user
    function handleSubmit(e) {
        e.preventDefault()
        const user = {
            username,
            password
        }
        fetch(`http://localhost:3000/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then((res) => {
            return res.json().then((data) => {
                if (res.ok) {
                    return data
                } else {
                    throw data
                }
            })
        })
        .then((data) => {
            const { user, token } = data
            localStorage.setItem("token", token)
            setUser({
                id: data.user.id,
                name: data.user.name,
                username: data.user.username
            })
            history.push('/welcome')
        })
        .catch((error) => {
            setErrors(error.errors)
        })
    }

    return (
        <div>
            Log In
            <Container className="log-container">
                <Row>
                    <Col>
                        <h3>Log In</h3>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                            <Form.Control type="text" 
                                placeholder="User Name"
                                id="username"
                                value={username} 
                                name="username"
                                onChange={(e) => setUsername(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                            <Form.Control
                            type="password" 
                            placeholder="Password" 
                            id="password"
                            value={password}
                            name="password" 
                            onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Group>
                            <Button className="button" variant="light" type="submit" value="Log in">Log In</Button>
                        </Form>
                        {errors ? errors.map(error => <Alert variant="dark" key={error}>{error}</Alert>) : null}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login