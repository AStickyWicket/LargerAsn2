import React from "react";
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const TopNavBar = () => {
    return (
        <>
            <Navbar bg='dark' variant='dark' expand='lg'>
                <Container>
                <Navbar.Brand as={Link} to="/">Movie Review Site</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/submit-review">Submit A Review</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </>
    )
}

export default TopNavBar;