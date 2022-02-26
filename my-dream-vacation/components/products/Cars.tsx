import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Cars() {
  return (
    <Form>
      <Row xs="auto" style={{}}>

        <Col>
          <Form.Label>Pick-up Date</Form.Label>
          <Form.Control type="date" />
        </Col>

        <Col>
          <Form.Label></Form.Label>
          <Form.Control type="time" />
        </Col>

        <Col>
          <Form.Label>Return</Form.Label>
          <Form.Control type="date" />
        </Col>

        <Col>
          <Form.Label></Form.Label>
          <Form.Control type="time" />
        </Col>




      </Row>




    </Form>
  )
}

export default Cars