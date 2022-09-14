import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './MainNav.scss';
import logo from '../../services/img/logo1.png'
import HeaderBottom from '../carousel/Carousel';

const MainNav = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="navLinks">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'nav-active' : ''
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? 'nav-active' : ''
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? 'nav-active' : ''
                            }
                        >
                            Blog
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNav;