import Header from './Components/Header';
import Security from './Components/Security';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import facade from './Components/ApiFacade';
import ProfilePage from './Components/ProfilePage';
import LoginRegistrer from './Components/LoginRegistrer';


function App() {
    return (
        <div>
            <Header />
            <Row>
                <Col></Col>
                <Col xs={7}>
                    <Router>
                        <Switch>
                            <Route path="/myprofile">
                                <ProfilePage/>
                            </Route>
                            <Route path='/'>
                                <LoginRegistrer >

                                    <div>asdasdasds</div>
                                </LoginRegistrer>
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