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
    <Navbar expand="lg" className="" id='navbarbackground'>
      <Container>
        <Navbar.Brand>
          <Link to="/Home" className='btn'>
            KeepUp
          </Link>
        </Navbar.Brand>
        <Navbar.Brand id="avatar">
          <Avatar alt="User" src={userPhoto} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i class="fa-solid fa-bars"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button>
              <Link to="/Home" className='btn w-30'>Home</Link>
            </Button>
            <Button>
              <Link to="/Friends" className='btn w-30'>Friends</Link>
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

