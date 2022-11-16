// Once Signed in:
// Feed of posts.
// Assorted Advertisements. 
// Emoji Reactions
// -- SEA BASS
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from "react-bootstrap"

import avatarPic from '../assets/images/Sebas-dog.jpeg'
import Avatar from 'react-avatar';




export const Feed = () => {
    return (
    //    header
        <Row className='align-items-left'>
            <Col md={6}>
        <div>
            <div className='feed-header'>
            <h2>Home</h2>
            </div>
            {/* post */}
            <div className='post-box'>
                <form>
                    <div className='post-box-input'>
                    <Avatar className='avatar' src={avatarPic} />
                    <input placeholder="What's Happening"></input>
                    </div>
                    <Button className='post-button' variant="outline-info">
                        Post
                    </Button>
                </form>
            </div>
        </div>
        {/* posts */}
        </Col>
        </Row>
    )
}