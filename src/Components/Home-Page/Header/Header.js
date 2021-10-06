import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <header className="bg-light">
            <Container>
                <Row className="py-5 align_c">
                    <Col md={5}>
                        <h1 className="font_rale lh-sm l_spacing">Find The Best <br />Online Courses to <br />Gain New Skills</h1>
                        <p className="fs-5">Meet university,and cultural institutions, who'll share their experience.</p>
                        <button className="rounded btn btn_custom mt-3">View Courses</button>
                    </Col>
                    <Col md={7}>
                        <img src="/images/header.svg" alt="Header Illustration" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;