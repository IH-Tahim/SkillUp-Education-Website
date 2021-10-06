import React from 'react';
import logo from '../../../logo.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="" width="170" height="56" className="d-inline-block align-top" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav >
                        <Link to="/" className="fs-5  font_rale text-decoration-none nav-link">Home</Link>
                        <Link to="/about" className="fs-5  font_rale text-decoration-none nav-link">About</Link>
                        <Link to="/courses" className="fs-5  font_rale text-decoration-none nav-link">Courses</Link>
                        <Link to="/contact" className="fs-5  font_rale text-decoration-none nav-link">Contact</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;