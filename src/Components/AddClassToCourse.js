import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Table from 'react-bootstrap/Table'
import facade from './ApiFacade';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Doc.css'

function AddClassToCourse() {
    const initialValue = {
        courseId: null,
        courseClassId: null
    }
    const [open, setOpen] = useState(false);
    const [classes, setClasses] = useState([]);
    const [courses, setCources] = useState([])
    const [body, setBody] = useState(initialValue);

    useEffect(() => {
        facade.fetchClasses().then(data => setClasses(data));
        facade.fetchCourses().then(data => setCources(data));
    }, [open])

    const selectCourse = (event) => {
        setBody({ ...body, courseId: event })
        console.log(body)
    }

    const selectClass = (event) => {
        setBody({ ...body, courseClassId: event })
        console.log(body)
    }

    const ClassTable = () => {
        const classs = classes.find(classes => classes.id == body.courseClassId);
        return <tr><td>{classs.id}</td><td>{classs.semester}</td><td>{classs.numberOfStudents}</td></tr>
    }
    const CourseTable = () => {
        const courcee = courses.find(courses => courses.id == body.courseId);
        return <tr><td>{courcee.id}</td><td>{courcee.courseName}</td></tr>
    }

    const onSubmit = () => {
        facade.AddClassToCourse(body).then(data => alert(data));
    };

    const ClassList = () => {
        return classes.map((classes, index) => <Dropdown.Item key={index} eventKey={classes.id} >{classes.id}</Dropdown.Item>)
    }
    const CourseList = () => {
        return courses.map((courses, index) => <Dropdown.Item key={index} eventKey={courses.id}>{courses.courseName}</Dropdown.Item>)
    }
    return (
        <div>
            <Button
                className="button"
                onClick={() => setOpen(!open)}
                aria-controls="text"
                aria-expanded={open}
            >
                ADD CLASS TO COURSE
          </Button>
            <Collapse in={open}>
                <div id="text" className="lignup">
                    <Row>
                        <Col>
                            <div className="lignup">
                                <DropdownButton id="dropdown-basic-button" name="classId" title="SELECT A CLASS" onSelect={selectClass}>
                                    <ClassList />
                                </DropdownButton>
                            </div>
                        </Col>
                        <Col>
                            <div className="lignup">
                                <DropdownButton id="dropdown-basic-button" name="courseId" title="SELECT A COURSE" onSelect={selectCourse}>
                                    <CourseList />
                                </DropdownButton>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        {body.courseClassId !== null ?
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Class_id</th>
                                        <th>Semester</th>
                                        <th>Number Of Students</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ClassTable />
                                </tbody>
                            </Table>
                            : null}
                    </Row>
                    {body.courseId !== null ?
                        <Table>
                            <thead>
                                <tr>
                                    <th>Course_id</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <CourseTable />
                            </tbody>
                        </Table>
                        : null}
                <Button variant="primary" type="submit" onClick={onSubmit}>
                    ADD COURSE
                        </Button>
                </div>
            </Collapse>
        </div>
    );
}

export default AddClassToCourse;
