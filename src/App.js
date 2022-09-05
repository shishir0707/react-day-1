
import './App.css';
import NavBar from './home/Home';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <div className='App'>
          <div>
            <Row>
              <Col className='align-items-center d-flex justify-content-center'>
                <h1>I am Shishir</h1>
              </Col>
              <Col className='text-center'>
                <h3>Shishir</h3>
              </Col>
            </Row>
          </div>
        </div>
      </header>
      <section className='blog'>
        <Container>
          <Row>
            <Col>
              <h6>December 22, 2017</h6>
              <h1>How To Find Out Beautiful Workspace.</h1>
              <p>Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.</p>
              <button variant="outline-success">
                Submit
              </button>
            </Col>
            <Col>

            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;
