import React from 'react';
import './MainNav.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';


const MainNav = () => {
    
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto navLinks">
                        <Link to="/home">Home</Link>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? 'text-danger' : ''
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="blog"
                            className={({ isActive }) => 
                                isActive ? 'text-success' : ''
                        }
                        >
                            Blog
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default MainNav;