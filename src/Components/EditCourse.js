import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import facade from './ApiFacade';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

import './Doc.css';

function EditCourse() {
    const initialValue = {
        id: null,
        courseName: null,
        courseDescription: null
    }
    const [open, setOpen] = useState(false);
    const [courses, setCources] = useState([])
    const [body, setBody] = useState(initialValue);

    const selectCourse = (event) => {
        setBody({ ...body, id: event })
    }

    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setBody({ ...body, [name]: value });
    };

    const onSubmit = event => {
        facade.EditCourse(body).then(data => alert(data));
        event.preventDefault();
    };

    useEffect(() => {
        facade.fetchCourses().then(data => setCources(data));
    }, [open])

    const CourseList = () => {
        return courses.map((courses, index) => <Dropdown.Item key={index} eventKey={courses.id}>{courses.courseName}</Dropdown.Item>)
    }
    const CourseTable = () => {
        const course = courses.find(courses => courses.id == body.id);
        return <tr><td>{course.id}</td><td>{course.courseName}</td><td>{course.courseDescription}</td></tr>
    }

    return (
        <div>
            <Button
                className="button"
                onClick={() => setOpen(!open)}
                aria-controls="text"
                aria-expanded={open}
            >
                EDIT COURSES
          </Button>
            <Collapse in={open}>
                <div id="text">
                    <br />
                    <DropdownButton id="dropdown-basic-button" title="SELECT A COURSE" onSelect={selectCourse}>
                        <CourseList />
                    </DropdownButton>
                    <br />
                    {body.id !== null ?
                        <Table>
                            <thead>
                                <tr>
                                    <th>Course_id</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <CourseTable />
                            </tbody>
                        </Table>
                    : null}
                    <Form onSubmit={onSubmit}>
                        <Form.Group >
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter the name of the course" name="courseName" onChange={handleChange}/>
                            <Form.Text className="text-muted">
                                You must choose a name, or it will save it without one.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Course Description</Form.Label>
                            <Form.Control type="text" placeholder="Descripe the course in short teams" name="courseDescription" onChange={handleChange}/>
                            <Form.Text className="text-muted">
                                You must write a description, or it will save it without one.
                            </Form.Text>
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

export default EditCourse;
