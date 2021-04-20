import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function PostMaker() {
    return (
        <div className='postMaker'>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="What is on yout heart" />
                </Form.Group>
            </Form>
        </div>
    )
}

export default PostMaker
