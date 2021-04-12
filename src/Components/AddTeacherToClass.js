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

function AddTeacherToClass() {
    const initialValue = {
        classId: null,
        teacherId: null
    }
    const [open, setOpen] = useState(false);
    const [classes, setClasses] = useState([]);
    const [teachers, setTeacher] = useState([])
    const [body, setBody] = useState(initialValue);

    useEffect(() => {
        facade.fetchClasses().then(data => setClasses(data));
        facade.fetchTeachers().then(data => setTeacher(data));
    }, [open])

    const selectTeaher = (event) => {
        setBody({ ...body, teacherId: event })
        console.log(body)
    }

    const selectClass = (event) => {
        setBody({ ...body, classId: event })
        console.log(body)
    }

    const ClassTable = () => {
        const classs = classes.find(classes => classes.id == body.classId);
        return <tr><td>{classs.id}</td><td>{classs.semester}</td><td>{classs.numberOfStudents}</td></tr>
    }
    const TeacherTable = () => {
        const teacher = teachers.find(teachers => teachers.id == body.teacherId);
        return <tr><td>{teacher.id}</td><td>{teacher.name}</td><td>{teacher.email}</td></tr>
    }

    const onSubmit = () => {
        facade.AddTeacherToClass(body).then(data => alert(data));
    };

    const ClassList = () => {
        return classes.map((classes, index) => <Dropdown.Item key={index} eventKey={classes.id} >{classes.id}</Dropdown.Item>)
    }
    const TeacherList = () => {
        return teachers.map((teacher, index) => <Dropdown.Item key={index} eventKey={teacher.id}>{teacher.name}</Dropdown.Item>)
    }
    return (
        <div>
            <Button
                className="button"
                onClick={() => setOpen(!open)}
                aria-controls="text"
                aria-expanded={open}
            >
                ADD TEACHER TO CLASS
          </Button>
            <Collapse in={open}>
                <div id="text" className="lignup">
                    <Row>
                        <Col>
                            <div className="lignup">
                                <DropdownButton id="dropdown-basic-button" title="SELECT A CLASS" onSelect={selectClass}>
                                    <ClassList />
                                </DropdownButton>
                            </div>
                        </Col>
                        <Col>
                            <div className="lignup">
                                <DropdownButton id="dropdown-basic-button" title="SELECT A TEACHER" onSelect={selectTeaher}>
                                    <TeacherList />
                                </DropdownButton>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        {body.classId !== null ?
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
                    {body.teacherId !== null ?
                        <Table>
                            <thead>
                                <tr>
                                    <th>Course_id</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TeacherTable />
                            </tbody>
                        </Table>
                        : null}
                <Button variant="primary" type="submit" onClick={onSubmit}>
                    ADD TEACHER
                        </Button>
                </div>
            </Collapse>
        </div>
    );
}

export default AddTeacherToClass;
