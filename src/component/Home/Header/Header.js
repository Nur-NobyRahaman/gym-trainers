import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../../../images/logo.jpg'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import {signOut } from 'firebase/auth';

const Header = () => {
  const [user]=useAuthState(auth);
    return (
        
        <Navbar  collapseOnSelect expand="lg"   variant="light ">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={logo} alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/#service" href='#services'>Service</Nav.Link>
            <Nav.Link as={Link} to={'/trainers'} >Trainers</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown"> */}
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            {/* </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            { user?
            <Nav.Link  onClick={()=>signOut(auth)}>
           Sign Out
           </Nav.Link>
           :
            <Nav.Link  as={Link} to="/login">
             Login
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
    );
};

export default Header;