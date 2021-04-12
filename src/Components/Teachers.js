import React, { useEffect,  useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Table from 'react-bootstrap/Table'
import facade from './ApiFacade';

import './Doc.css'

function Teachers() {
    const [open, setOpen] = useState(false);
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        facade.fetchTeachers().then(data => setTeachers(data));
    }, [open])

    const List = () => {
        return teachers.map((teachers, index) => <tr key={index}><td>{teachers.id}</td><td>{teachers.name}</td><td>{teachers.email}</td></tr>)
    }
    return (
        <div>
            <Button
                className="button"
                onClick={() => setOpen(!open)}
                aria-controls="text"
                aria-expanded={open}
            >
                ALL TEACHERS
          </Button>
            <Collapse in={open}>
                <div id="text">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Teacher_id</th>
                                <th>Name</th>
                                <th>Email</th>
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

export default Teachers;
