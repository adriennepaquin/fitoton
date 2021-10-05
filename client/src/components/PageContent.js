import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import MainContent from './MainContent'
import Footer from './Footer'


function PageContent() {
    const [user, setUser] = useState(null)

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
            // console.log(data)
            setUser({id: data.id,
                name: data.name,
                username: data.username
            })
        })
    }, [])

    return (
        <div>
            <NavBar user={user} setUser={setUser}/>
            <MainContent user={user} setUser={setUser}/>
            <Footer/>
        </div>
    )
}

export default PageContent