import { useState, useEffect } from 'react'
import DisplayWorkout from "./DisplayWorkout"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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

    const displayMyWorkouts = myWorkouts.map(myWork => {
        return <DisplayWorkout key={myWork.id} workout={myWork}/>
    })

    const displayWorkout1 = workouts[workouts.length - 1]
    const displayWorkout2 = workouts[workouts.length - 2]
    const displayWorkout3 = workouts[workouts.length - 3]
    const displayWorkout4 = workouts[workouts.length - 4]

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
                </Col>
                <Col className="col">
                    <h3>
                        Your recent workouts:
                    </h3>
                    {displayMyWorkouts}
                </Col>
            </Row>
            
        </Container>
    )
}

export default Welcome