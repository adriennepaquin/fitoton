import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Dropdown from 'react-bootstrap/Dropdown'

function Filter() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filters</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <h3>Filter Workouts By:</h3>
                <Dropdown className="d-inline mx-2">
                    <Dropdown.Toggle className="button" id="dropdown-button-dark-example1" variant="secondary">
                        Length
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item >5</Dropdown.Item>
                        <Dropdown.Item >10</Dropdown.Item>
                        <Dropdown.Item >15</Dropdown.Item>
                        <Dropdown.Item >20</Dropdown.Item>
                        <Dropdown.Item >30</Dropdown.Item>
                        <Dropdown.Item >45</Dropdown.Item>
                        <Dropdown.Item >60</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="d-inline mx-2">
                    <Dropdown.Toggle className="button" id="dropdown-button-dark-example1" variant="secondary">
                        Class Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item >Cycling</Dropdown.Item>
                        <Dropdown.Item >Yoga</Dropdown.Item>
                        <Dropdown.Item >Strength</Dropdown.Item>
                        <Dropdown.Item >Meditation</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="d-inline mx-2">
                    <Dropdown.Toggle className="button" id="dropdown-button-dark-example1" variant="secondary">
                        Instructor
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item >Alex</Dropdown.Item>
                        <Dropdown.Item >Anna</Dropdown.Item>
                        <Dropdown.Item >Christine</Dropdown.Item>
                        <Dropdown.Item >Cody</Dropdown.Item>
                        <Dropdown.Item >Jess</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  export default Filter