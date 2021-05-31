import { React, useRef } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import facade from './ApiFacadeFakeBook'
import firebase from './FirebaseApi'

function PostMaker({ setPosts }) {

    const messageRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = firebase.auth().currentUser;
        const body = {
            message: messageRef.current.value
        }
        if (user) {
            facade.addPost(body, user.za).then((data) => setPosts(data))
        }
    }



    return (
        <div className='postMaker'>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Row>
                        <Col><Form.Control ref={messageRef} type="text" placeholder="What is on your mind?" /></Col>
                        <Col xs={2}><Button className="" variant="primary" type="submit">Sumbit</Button></Col>
                    </Row>
                </Form.Group>
            </Form>
        </div>
    )
}

export default PostMaker
