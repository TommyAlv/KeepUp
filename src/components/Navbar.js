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

export const Nbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Friends">Friends</Nav.Link>
            <Nav.Link href="/Settings">Settings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand id="avatar">Avatar Photo</Navbar.Brand>
        <Nav.Link href="/LogOut">Log Out</Nav.Link>
      </Container>
    </Navbar>
  );
}