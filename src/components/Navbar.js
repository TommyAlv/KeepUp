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
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import userPhoto from "../assets/images/land-rover.jpeg"



export const Nbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="">
      <Container>
        <Navbar.Brand>
          <Link to="/Home" className='btn'>
            Logo
          </Link>
        </Navbar.Brand>
        <Navbar.Brand id="avatar">
          <Avatar alt="User" src={userPhoto} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Button>
              <Link to="/Home" className='btn'>Home</Link>
            </Button>
            <Button>
              <Link to="/Friends" className='btn'>Friends</Link>
            </Button>
            <Button>
              <Link to="/Settings" className='btn'>Settings</Link>
            </Button>


          </Nav>
        </Navbar.Collapse>
        {/* <Link to="/LogOut" className='btn'>Log Out</Link> */}
      </Container>
    </Navbar>
  );
}

