import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Table from 'react-bootstrap/Table';
import facade from './ApiFacade';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './Doc.css';

function ClassWithInfo() {


    const [classId, setClassId] = useState();
    const [open, setOpen] = useState(false);
    const [classes, setClasses] = useState([]);
    const [theClass, setTheClass] = useState({});

    useEffect(() => {
        facade.fetchClassesWithInfo().then(data => setClasses(data));
    }, [open])

    const selectClass = (event) => {
        setClassId(event);
        setTheClass(classes.find(classes => classes.id == event));
    }

    const ClassList = () => {
        return classes.map((classes, index) => <Dropdown.Item key={index} eventKey={classes.id} >{classes.id}</Dropdown.Item>)
    }

    const ClassTable = () => {
        return <tr><td>{theClass.id}</td><td>{theClass.semester}</td><td>{theClass.numberOfStudents}</td><td>{theClass.courseDTO.courseName}</td></tr>
    }

    const TeacherTable = () => {
        return theClass.teachers.map((teacher) => <tr><td>{teacher.id}</td><td>{teacher.name}</td><td>{teacher.email}</td></tr>)
    }


    return (
        <div>
            <Button
                className="button"
                onClick={() => setOpen(!open)}
                aria-controls="text"
                aria-expanded={open}
            >
                LIST OF CLASSES WITH EXTRA INFO
          </Button>
            <Collapse in={open}>
                <div id="text">
                    <br />
                    <DropdownButton id="dropdown-basic-button" title="SELECT A CLASS" onSelect={selectClass}>
                        <ClassList />
                    </DropdownButton>
                    <br />
                    {classId !== undefined ?
                        <div>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Class_id</th>
                                        <th>Semester</th>
                                        <th>Number Of Students</th>
                                        <th>Course</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ClassTable />
                                </tbody>
                            </Table>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Teacher_id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TeacherTable />
                                </tbody>
                            </Table>
                        </div>
                    : null}
                </div>
            </Collapse>
        </div>
    );
}

export default ClassWithInfo;
