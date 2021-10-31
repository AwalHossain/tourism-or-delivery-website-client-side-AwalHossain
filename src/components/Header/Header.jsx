import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import './Header.css'
const Header = () => {
    const {user, logOut} = UseAuth()
    return (
        // This is a react bootstarp navbar. Here i use some ternary operator
        <div className="">
            <Navbar collapseOnSelect expand="lg"  className="navigation bg-gray-800 " >
                <Container>
                <Navbar.Brand ><Link to="/home"><img className="h-16 w-22" src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h7-banner-h-img-7.png" alt="" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Link className="nav-link text-white" to="/home"> Home </Link>
                   
                    <Link to="/services" className="nav-link text-white">Services</Link>
                    {
                         user?.email &&  <Link className="nav-link text-white" to="/myorder">MyOrder</Link>
                    }
                    {
                        user?.email? <Link className="nav-link text-white border-2 " onClick={logOut} to="/login"> LogOut  <small className="p-0 m-0">{user?.displayName}</small> </Link> :
                        <Link className="nav-link text-white" to="/login">  Login  </Link>
                    }
                </Nav>
                    {
                        user?.email &&   <NavDropdown className="text-white" title="Admin" id="collasible-nav-dropdown">
                        <Link className="nav-link " to="addService">Add Service</Link>
                        <Link className="nav-link" to="/manageOrder" >Manage </Link>
                        </NavDropdown>
                    }
                </Navbar.Collapse>

                </Container>
        </Navbar>
        </div>
    );
};

export default Header;