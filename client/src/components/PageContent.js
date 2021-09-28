import { useState } from 'react'
import NavBar from './NavBar'
import MainContent from './MainContent'
import Footer from './Footer'


function PageContent() {
    const [user, setUser] = useState(null)

    return (
        <div>
            <NavBar/>
            <MainContent user={user} setUser={setUser}/>
            Page Content
            <Footer/>
        </div>
    )
}

export default PageContent