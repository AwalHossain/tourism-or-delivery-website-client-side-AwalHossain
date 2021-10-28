import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Header = () => {
    const {user, logOut} = UseAuth()
    console.log(user.email);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Link className="nav-link" to="/home"> Home </Link>
                    <Link className="nav-link" to="features">Features</Link>
                    <Link to="/service" className="nav-link">Service</Link>
                    {
                        user?.email? <Link onClick={logOut} to="/login"> LogOut </Link> :
                        <Link className="nav-link" to="/login">  Login  </Link>
                    }
                </Nav>
                </Navbar.Collapse>

                </Container>
        </Navbar>
        </div>
    );
};

export default Header;