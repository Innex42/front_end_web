import logo from './logo.svg';
//import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.scss';
import './App.css';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <>
    <p>Some Text</p>
    
    <Container class="container-fluid">
      <Card>
        <Card.Header>
          <strong className='mr-auto'>Section 1</strong>
        </Card.Header>
        <Card.Body>This makes use of Bootstrap to create a responsive layout</Card.Body>
      </Card>
      <Card>
        <Card.Header>
          <strong className='mr-auto'>Section 2</strong>
        </Card.Header>
        <Card.Body>If you are unfamiliar with Bootstrap styles w3schools has
some introductory material.</Card.Body>
      </Card>
      <Card>
        <Card.Header>
          <strong className='mr-auto'>Section 3</strong>
        </Card.Header>
        <Card.Body><a href ="https://github.com/react-bootstrap/code-sandboxexamples"> https://github.com/react-bootstrap/code-sandboxexamples </a> has more information about how to use Bootstrap with React.</Card.Body>
      </Card>

      <Button> Click Me</Button>
    </Container>
    </>
  );
}

export default App;
