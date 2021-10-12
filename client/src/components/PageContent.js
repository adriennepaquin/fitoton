import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import MainContent from './MainContent'
import Footer from './Footer'


function PageContent() {
    const APIkey = 
    const [user, setUser] = useState(null)
    const [workouts, setWorkouts] = useState([])
    const [myWorkouts, setMyWorkouts] = useState([])
    const [instructors, setInstructors] = useState({})

    // fetch autologin
    useEffect(() => {
        const token = localStorage.getItem("token")
        fetch(`http://localhost:3000/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
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
        .then(data => {
            setUser({id: data.id,
                name: data.name,
                username: data.username
            })
        })
    }, [])

    // fetch all workouts
    useEffect(() => {
        fetch(`http://localhost:3000/workouts`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setWorkouts(data)
        })
    }, [])

    // fetch instructor data & connect with API photos
    useEffect(() => {
        fetch(`http://localhost:3000/instructors`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=peloton%20${data.name}&count=1`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
                    "x-rapidapi-key": APIkey
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });
        })
    })

    return (
        <div>
            <NavBar user={user} setUser={setUser}/>
            <MainContent user={user} setUser={setUser} workouts={workouts} myWorkouts={myWorkouts} setMyWorkouts={setMyWorkouts}/>
            <Footer/>
        </div>
    )
}

export default PageContent