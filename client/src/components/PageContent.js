import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import MainContent from './MainContent'
import Footer from './Footer'


function PageContent() {
    const [user, setUser] = useState(null)
    const [workouts, setWorkouts] = useState([])

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

    return (
        <div>
            <NavBar user={user} setUser={setUser}/>
            <MainContent user={user} setUser={setUser} workouts={workouts}/>
            <Footer/>
        </div>
    )
}

export default PageContent