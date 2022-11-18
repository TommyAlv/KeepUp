// Navbar Requirements: Side Navbar 
// Home Button
// Sign In / Sign Out
// Post Option
// Friends
// Profile Photo
// -- TOMMY

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const Nbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link to="/Home" className='btn'>Home</Link>
            <Link to="/Friends" className='btn'>Friends</Link>
            <Link to="/Settings" className='btn'>Settings</Link>


          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand id="avatar">Avatar Photo</Navbar.Brand>
        <Link to="/LogOut">Log Out</Link>
      </Container>
    </Navbar>
  );
}