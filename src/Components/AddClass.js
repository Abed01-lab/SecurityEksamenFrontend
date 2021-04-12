import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import facade from './ApiFacade';
import './Doc.css';

function AddClass() {
    const initalValue = {
        semester: "",
        numberOfStudents: ""
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
        facade.AddClass(body).then(data => alert(data));
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
                ADD CLASS
          </Button>
            <Collapse in={open}>
                <div id="text">
                    <Form onSubmit={onSubmit}>
                        <Form.Group >
                            <Form.Label>What Semester Is the Class Currently At?</Form.Label>
                            <Form.Control type="number" placeholder="Enter the number of the semester" name="semester" onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Only positive number, please
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>How Many Student Attends The Class?</Form.Label>
                            <Form.Control type="number" placeholder="Enter the number of students in the class" name="numberOfStudents" onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Only positive number, please
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            ADD CLASS
                        </Button>
                    </Form>
                </div>
            </Collapse>
        </div>
    );
}

export default AddClass
