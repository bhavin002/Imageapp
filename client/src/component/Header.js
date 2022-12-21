import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate("/")}} style={{"cursor":"pointer"}}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/register")}}>Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header;