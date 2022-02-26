import {Form, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Flights = () => {
    
  return (
    
      <Form>
        <Row>
      
          <Col>
            <Form.Label>From</Form.Label>
            <Form.Control type="text"  />
          </Col>
           
           <Col>
            <Form.Label>To</Form.Label>
            <Form.Control type="text" />
           </Col>

          <Col>
            <Form.Label>Depart</Form.Label>
            <Form.Control type="date" />
          </Col>

      <Col>
            <Form.Label>Return</Form.Label>
            <Form.Control type="date" />
      </Col>
           
            
   
         
        </Row>
       
          
        

      </Form>
   
  )
}

export default Flights