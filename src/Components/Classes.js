import React, { useEffect,  useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Table from 'react-bootstrap/Table'
import facade from './ApiFacade';

import './Doc.css'

function Classes() {
    const [open, setOpen] = useState(false);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        facade.fetchClasses().then(data => setClasses(data));
    }, [open])

    const List = () => {
        return classes.map((classes, index) => <tr key={index}><td>{classes.id}</td><td>{classes.semester}</td><td>{classes.numberOfStudents}</td></tr>)
    }
    return (
        <div>
            <Button
                className="button"
                onClick={() => setOpen(!open)}
                aria-controls="text"
                aria-expanded={open}
            >
                ALL CLASSES
          </Button>
            <Collapse in={open}>
                <div id="text">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>class_id</th>
                                <th>Semester</th>
                                <th>Number Of Students</th>
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

export default Classes;
