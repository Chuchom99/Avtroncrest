import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Deposit() {
  return (
    <Container>
      <Row>
        <Col>
         <Card>
           <Card.Header>Featured</Card.Header>
           <Card.Body>
             <Card.Title>Special title treatment</Card.Title>
             <Card.Text>
               With supporting text below as a natural lead-in to additional content.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
         </Card>
        </Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  );
}

export default Deposit;


