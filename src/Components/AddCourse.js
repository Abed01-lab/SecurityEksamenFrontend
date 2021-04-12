import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import facade from './ApiFacade';
import './Doc.css';

function AddCourse() {
    const initalValue = {
        courseName: "",
        courseDescription: ""
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
        facade.AddCourse(body).then(data => alert(data));
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
                ADD NEW COURSE
          </Button>
            <Collapse in={open}>
                <div id="text">
                    <Form onSubmit={onSubmit}>
                        <Form.Group >
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter the name of the course" name="courseName" onChange={handleChange}/>
                            <Form.Text className="text-muted">
                                Keep it short, please.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Course Description</Form.Label>
                            <Form.Control type="text" placeholder="Descripe the course in short teams" name="courseDescription" onChange={handleChange}/>
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

export default AddCourse
