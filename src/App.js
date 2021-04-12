import Header from './Components/Header';
import Courses from './Components/Courses';
import Classes from './Components/Classes';
import Security from './Components/Security';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddCourse from './Components/AddCourse';
import AddClass from './Components/AddClass';
import Teachers from './Components/Teachers';
import AddTeacher from './Components/AddTeacher';
import AddClassToCourse from './Components/AddClassToCourse';
import AddTeacherToClass from './Components/AddTeacherToClass';
import facade from './Components/ApiFacade';
import EditCourse from './Components/EditCourse';
import ClassWithInfo from './Components/ClassWithInfo';
function App() {
    return (
        <div>
            <Header />
            <Row>
                <Col></Col>
                <Col xs={7}>
                    <Router>
                        <Switch>
                            <Route path="/home">
                                <Courses />
                                {facade.loggedIn() ?
                                    <div>
                                        <EditCourse />
                                        <AddCourse />
                                        <Classes />
                                        <AddClass />
                                        <Teachers />
                                        <AddTeacher />
                                        <AddClassToCourse />
                                        <AddTeacherToClass />
                                        <ClassWithInfo />
                                    </div>
                                    : null
                                }
                            </Route>
                            <Route path='/login'>
                                <Security />
                            </Route>
                        </Switch>
                    </Router>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default App;