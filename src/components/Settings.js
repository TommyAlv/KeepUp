// Profile Avatar Photo - Circle
// Update / Edit Information
// Login Info Change
// Delete Account
// -- SEABASS
import { Button, Col, Container, Row } from "react-bootstrap"
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCheckCircleFill } from "react-icons/bs";
import avatarPic from '../assets/images/Sebas-dog.jpeg'
import Avatar from 'react-avatar';


export const Settings = () => {
    return (


        <section className='vh-100'>
            <div className='page-banner'>
                <h2 className='Settings'></h2>
            </div>
            <Container>
                <Row className='align-items-center'>
                    <Col md={2}>
                    </Col>
                    <Col className='scroll' md={8}>
                        <div className='profile-card'>
                            <Avatar className='avatar-feed' src={avatarPic} /><Button id='user-name-btn'  varient='outline-info'>Change Profile Pic </Button>
                            <h3>Sebastian Tischner<span>
                                <BsCheckCircleFill /></span></h3>
                            <h6>@sebascrab</h6>
                        </div>
                        <div>
                            <input className="first-name-input" placeholder='Change First Name'></input>
                        </div>
                        <Button id='first-name-btn' varient='outline-info'>
                            submit
                        </Button>
                        <div>
                            <input className="last-name-input" placeholder='Change Last Name'></input>
                        </div>
                        <Button id='last-name-btn'  varient='outline-info'>
                            submit
                        </Button>
                        <div>
                            <input  className="user-name-input" placeholder='Change Username'></input>
                        </div>
                        <Button id='user-name-btn'  varient='outline-info'>
                            submit
                        </Button>
                        <div>
                        </div>
                        
                    </Col>
                    <Col md={2}>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}