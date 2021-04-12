import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import facade from './ApiFacade';
import './Doc.css';

function AddTeacher() {
    const initalValue = {
        name: "",
        email: ""
    }
    const [open, setOpen] = useState(false);
    const [body, setBody] = useState(initalValue);

    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setBody({ ...body, [name]: value });
    };
    

    const onSubmit = event => {
        facade.AddTeacher(body).then(data => alert(data));
        event.preventDefault();
    };
        

    return (
        <div>
            <Button
                className="button"
                onClick={() => setOpen(!open)}
                aria-controls="text"
                aria-expanded={open}
            >
                ADD TEACHER
          </Button>
            <Collapse in={open}>
                <div id="text">
                    <Form onSubmit={onSubmit}>
                        <Form.Group >
                            <Form.Label>Teacher Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter the name of the teacher" name="name" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Teacher Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter the email of the teacher" name="email" onChange={handleChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            ADD COURSE
                        </Button>
                    </Form>
                </div>
            </Collapse>
        </div>
    );
}

export default AddTeacher;