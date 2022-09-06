
import { Container, Button, Form, Navbar, Nav, Row, Col, } from 'react-bootstrap';
import Me from '../Img';

const MainNav = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark" >
                <Container>
                    <Navbar.Brand href="#">Shishir</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <Nav.Link href="#action3">Testimonial</Nav.Link>
                            <Nav.Link href="#action4" className='px-2'>Blog</Nav.Link>
                            <Nav.Link href="#action5">Contact</Nav.Link>
                        </Nav>
                        <Form className="d-flex px-3">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button bg="dark" variant="dark">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
            <div className='header-bottom mb-2 mt-2'>
                <Row>
                    <Col md={6} className='left-side d-flex align-items-center justify-content-center'>
                        <h1 className='text-center'>I am Shariar Shishir</h1>
                    </Col>
                    <Col md={6} className="right-side">
                        <Me/>
                    </Col>
                </Row>
            </div>
        </div >


    );
};

export default MainNav;