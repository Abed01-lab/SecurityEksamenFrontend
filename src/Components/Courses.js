import React, { useEffect,  useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Table from 'react-bootstrap/Table'
import facade from './ApiFacade';

import './Doc.css'

function Courses() {
    const [open, setOpen] = useState(false);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        facade.fetchCourses().then(data => setCourses(data));
    }, [open])

    const List = () => {
        return courses.map((course, index) => <tr key={index}><td>{course.courseName}</td><td>{course.courseDescription}</td></tr>)
    }
    return (
        <div>
            <Button
                className="button"
                onClick={() => setOpen(!open)}
                aria-controls="text"
                aria-expanded={open}
            >
                ALL COURSES
          </Button>
            <Collapse in={open}>
                <div id="text">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <List />
                        </tbody>
                    </Table>
                </div>
            </Collapse>
        </div>
    );
}

export default Courses
