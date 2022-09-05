import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// navbar

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        <Nav.Link href="#home">Portpolio</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;