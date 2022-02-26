import React from 'react'
import { Form, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Hotels() {
  return (
    <Container>
      <Form>
        
        <Col>
          <Row>
            <Col>
              <Form.Label placeholder='Destination/Hotel Name' style={{ color: 'gray' }}>  </Form.Label>
              <Form.Control type="text" placeholder='City, airport, region, landmark' width={14} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label placeholder='Room and Guests' style={{ color: 'gray' }}> Rooms And Guests</Form.Label>
              <Form.Control type="time" />
            </Col>
          </Row>
        </Col>


        <Col>
            <Row>
              <Col>
                <Form.Label>Check-In</Form.Label>
                <Form.Control type="date" />
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Label></Form.Label>
                <Form.Control type="time" />
              </Col>
            </Row>

        
        </Col>
       
          
       
          

          

          
        
      </Form>
    </Container>
   
  )
}

export default Hotels