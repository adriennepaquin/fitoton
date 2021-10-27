import { useState, useEffect } from 'react'
import DisplayWorkout from "./DisplayWorkout"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Welcome( {user, workouts, myWorkouts, setMyWorkouts} ) {

    // fetch user's workouts
    useEffect(() => {
        const token = localStorage.getItem("token")
        fetch(`http://localhost:3000/workouts/${user.id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            setMyWorkouts(data)
            console.log(data)
        })
    }, [])

    

    const displayWorkout1 = workouts[workouts.length - 1]
    const displayWorkout2 = workouts[workouts.length - 2]
    const displayWorkout3 = workouts[workouts.length - 3]
    const displayWorkout4 = workouts[workouts.length - 4]

    const displayMy1 = myWorkouts[myWorkouts.length - 1]
    const displayMy2 = myWorkouts[myWorkouts.length - 2]
    const displayMy3 = myWorkouts[myWorkouts.length - 3]
    const displayMy4 = myWorkouts[myWorkouts.length - 4]

    return (
        <Container>
            <Row>
                <Col className="col">
                    <h2>
                        Welcome to your dashboard, {user.name}
                    </h2>

                </Col>
            </Row>
            <Row>
                <Col className="col">
                    <h3>
                        Explore new workouts:
                    </h3>
                    {displayWorkout1 ? <DisplayWorkout workout={displayWorkout1}/> : null}
                    {displayWorkout2 ? <DisplayWorkout workout={displayWorkout2}/> : null}
                    {displayWorkout3 ? <DisplayWorkout workout={displayWorkout3}/> : null}
                    {displayWorkout4 ? <DisplayWorkout workout={displayWorkout4}/> : null}
                    <Button className="button" variant="dark" href="/workouts">View All Workouts</Button>
                </Col>
                <Col className="col">
                    <h3>
                        Your recent workouts:
                    </h3>
                    {displayMy1 ? <DisplayWorkout workout={displayMy1}/> : null}
                    {displayMy2 ? <DisplayWorkout workout={displayMy2}/> : null}
                    {displayMy3 ? <DisplayWorkout workout={displayMy3}/> : null}
                    {displayMy4 ? <DisplayWorkout workout={displayMy4}/> : null}
                    <Button className="button" variant="dark" href="/myworkouts">Your Workouts</Button>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Welcome