import Header from './Components/Header';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfilePage from './Components/ProfilePage';
import LoginRegister from './Components/LoginRegister';
import facade from './Components/ApiFacadeFakeBook'



function App() {
    const [user, setUser] = useState(null)
    const [userInfo, setUserInfo] = useState(null)

    return (
        <div >
            <Header user={user} setUser={setUser} />
            <Row>
                <Col></Col>
                <Col xs={7}>
                    {user !== null ? <ProfilePage user={user} /> : <LoginRegister user={user} setUser={setUser} setUserInfo={setUserInfo} />}
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default App