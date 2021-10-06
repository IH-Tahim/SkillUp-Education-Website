import React from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="container">
            <h2 className="primary_clr text-center font_rale mt-3 mb-2 ">About Us</h2>
            <Row className="align-items-center">
                <Col>
                    <h3 className="mb-3 font_robo">Who We Are?</h3>
                    <hr />
                    <p className="text-wrap text-secondary">Skill Up are designed for students whose scheduling commitments would otherwise make it difficult to enroll in a full-time higher education program. Offered for individual courses, diplomas, associate’s degrees and certificate programs, online studies are a valuable option. The resulting qualification a graduate receives after successfully completing.</p>
                </Col>

                <Col><img src="images/aboutimg.svg" alt="" /></Col>
            </Row>
        </div>
    );
};

export default About;