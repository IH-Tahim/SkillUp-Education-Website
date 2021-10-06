import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="container text-center">
            <h5 className="primary_clr mt-3">Contact Us</h5>
            <h2 className="mb-4 font_robo">Take Our Suggestion to Select Best Course For You</h2>
            <div className="w-75 m-auto">
                <Row className="g-2 mb-3">

                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Your Frist Name">
                            <Form.Control type="text" placeholder="name@example.com" />
                        </FloatingLabel>
                    </Col>

                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Your Last Name">
                            <Form.Control type="text" placeholder="name@example.com" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Your Email">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <FloatingLabel controlId="floatingTextarea2" label="Your Message">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a Message here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <FloatingLabel controlId="floatingSelectGrid" label="Your Occupation">
                            <Form.Select aria-label="Select Your Occupation">
                                <option>Open this to select Occupation</option>
                                <option value="1">Student</option>
                                <option value="2">Part Time Employee</option>
                                <option value="3">Full Time Employee</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" className="text-start" />
                </Form.Group>
            </div>
            <button type="submit" className="btn btn-secondary btn-lg">Send Message</button>


        </div>
    );
};

export default Contact;