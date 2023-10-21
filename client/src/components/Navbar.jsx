// import { useState } from "react";
import { Link } from "react-router-dom";
// import SignUpForm from "./SignupForm";
// import LoginForm from "./LoginForm";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavbarApp = () => {



    return(
        <Navbar variant="underline" bg="primary" style={{padding: "5px"}}>
            <Container>
                <Navbar.Brand>Climbing Shoes</Navbar.Brand>
            </Container>
            <Nav className="ml-auto" variant="underline">
                <Nav.Item>
                    <Nav.Link as={Link} to='/' >Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to='/savedshoes'>Saved</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to='/'>Login</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
        // Hidden Modal for Login/Signup
  );
}

export default NavbarApp;
