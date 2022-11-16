// Support / Contact Option
// Copyright Stuff
// -- TOMMY

import { Col, Container, Row } from "react-bootstrap"








export const Footer = () => {
    // html for footer
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                           
                        </div>
                        <p>Thank you for visiting my portfolio. Always welcome to feedback on improvments! All rights reserved by:  <a href="https://github.com/Sebascrab" target="_blank">  Sebastian Tischner</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}