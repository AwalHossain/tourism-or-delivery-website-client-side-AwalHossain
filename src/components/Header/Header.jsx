import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import './Header.css'
const Header = () => {
    const {user, logOut} = UseAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Link className="nav-link" to="/home"> Home </Link>
                   
                    <Link to="/services" className="nav-link">Services</Link>
                    {
                         user?.email &&  <Link className="nav-link" to="/myorder">MyOrder</Link>
                    }
                    {
                        user?.email? <Link className="nav-link" onClick={logOut} to="/login"> LogOut </Link> :
                        <Link className="nav-link" to="/login">  Login  </Link>
                    }
                </Nav>
                    {
                        user?.email &&   <NavDropdown  className="dark" variant="dark" title="Admin" id="collasible-nav-dropdown">
                        <Link className="nav-link" to="addService">Add New Service</Link>
                        <Link className="nav-link" to="/manageOrder" >Manage Order</Link>
                        </NavDropdown>
                    }
                </Navbar.Collapse>

                </Container>
        </Navbar>
        </div>
    );
};

export default Header;