import { useHistory } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function NavBar( {user, setUser} ) {
    const history = useHistory()

    function handleLogOut(){
        localStorage.removeItem("token")
        setUser(null)
        history.push('/')
    }


    return (
        <Navbar sticky="top" id="styled-navbar" bg="black" expand="sm">
            <Container>
                <Nav className="justify-content-start">
                    <Navbar.Brand href="/">
                        <div id="logo">
                            Fit-O-Ton
                        </div>
                    </Navbar.Brand>
                </Nav>
                <Nav>
                    <Nav className="justify-content-end">
                        {!user ? 
                        <>
                            <Nav.Link className="links-right" href="/signup">SignUp</Nav.Link>
                            <Nav.Link className="links-right" href="/login">LogIn</Nav.Link>
                        </>
                        :
                        <>
                            {/* <Navbar.Text className="logged-in">Logged in as: {user.username}</Navbar.Text> */}
                            <Nav.Link className="links-right" href="/welcome">Dashboard</Nav.Link>
                            <Nav.Link className="links-right" href="/workouts">Workouts</Nav.Link>
                            <Nav.Link className="links-right" href="/" onClick={handleLogOut}>Log Out</Nav.Link>
                        </>
                        }
                        
                    </Nav>        
                </Nav>
           </Container> 
        </Navbar>
    )
}

export default NavBar