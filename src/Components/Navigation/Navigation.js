import React from 'react';
import logo from '../../logo.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="" width="170" height="56" className="d-inline-block align-top" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav >
                        <Nav.Link href="#home" className="fs-5  font_rale">Home</Nav.Link>
                        <Nav.Link href="#about" className="fs-5 font_rale">About</Nav.Link>
                        <Nav.Link href="#courses" className="fs-5  font_rale">Courses</Nav.Link>
                        <Nav.Link href="#link" className="fs-5  font_rale">link</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;