
import './App.css';
import { Container, Button, Form, Navbar, Nav, Row, Col, Carousel } from 'react-bootstrap';
// import './slider/Carosel'
// import './Slider.css'



function App() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
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
      </Navbar>
      <div className='header-bottom mb-2 mt-2'>
        <Row>
          <Col md={6} className='left-side d-flex align-items-center justify-content-center'>
            <h1 className='text-center'>I am Shariar Shishir</h1>
          </Col>
          <Col md={6} className="right-side">

          </Col>
        </Row>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-height "
            src="https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-height"
            src="https://i.postimg.cc/qBGQNc37/ro-slider.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-height"
            src="https://i.postimg.cc/C12h7nZn/ms-1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className='container p-4'>
        <form name="sentMessage text-light" id="contactForm" novalidate="novalidate">
          <div class="form-row d-flex">
            <div class="control-group col-sm-6 p-2">
              <input type="text" class="form-control p-4" id="name" placeholder="Your Name"
                required="required" data-validation-required-message="Please enter your name" />
              <p class="help-block text-danger"></p>
            </div>
            <div class="control-group col-sm-6 p-2">
              <input type="email" class="form-control p-4" id="email" placeholder="Your Email"
                required="required" data-validation-required-message="Please enter your email" />
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group p-2">
            <input type="text" class="form-control p-4" id="subject" placeholder="Subject"
              required="required" data-validation-required-message="Please enter a subject" />
            <p class="help-block text-danger"></p>
          </div>
          <div class="control-group p-2">
            <textarea class="form-control py-3 px-4" rows="5" id="message" placeholder="Message"
              required="required"
              data-validation-required-message="Please enter your message"></textarea>
            <p class="help-block text-danger"></p>
          </div>
          <div>
            <button class="btn btn-outline-primary" type="submit" id="sendMessageButton">Send
              Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
