import Styles from '../../styles/Home.module.css'
import {Col, Row, Container, Form} from 'react-bootstrap'




function Trains() {
  return (
    <Container>
      <Row lg={2}>
          <Col>
            <Form.Label>From </Form.Label>
            <Form.Control type='text'></Form.Control>
            <Row>
              <Col>
                <Form.Control type='time'></Form.Control>
                <Form.Control type='date'></Form.Control>
              </Col>
            </Row>
          </Col>

          <Col>
              <Form.Label>To </Form.Label>
              <Form.Control type='text'></Form.Control>
            <Row>
              <Col>

                
            </Col>

          </Row>
          
          </Col>

      
    
          <Col>
          
          </Col>

      </Row>

         




    </Container>
    
  )
}

export default Trains