import { useHistory } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function NavBar( user, setUser ) {
    const history = useHistory()

    function handleLogOut(){
        localStorage.removeItem("token")
        setUser(null)
        history.push('/login')
    }

    return (
        <Navbar sticky="top" id="styled-navbar" bg="light" expand="sm">
            <Container>
                <Nav className="justify-content-start">
                    <Navbar.Brand>
                        
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Item>
                            {!user ? <Nav.Link className="links-left" href="/">Home</Nav.Link> : null}
                        </Nav.Item>
                    </Nav>
                </Nav>
                <Nav>
                    <Nav className="justify-content-end">
                        {!user ? (
                        <>
                            <Nav.Item>
                                <Nav.Link className="links-right" href="/signup">SignUp</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="links-right" href="/login">LogIn</Nav.Link>
                            </Nav.Item>
                        </>
                        ) : (
                        <>
                            <Nav.Item>
                                <Navbar.Text className="logged-in">Logged in as: {user.username}</Navbar.Text>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="links-right" href="/" onClick={handleLogOut}>Log Out</Nav.Link>
                            </Nav.Item>
                        </> 
                        )}   
                    </Nav>         
                </Nav>
           </Container> 
        </Navbar>
    )
}

export default NavBar