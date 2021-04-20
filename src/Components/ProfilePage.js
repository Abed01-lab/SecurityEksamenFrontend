import React from 'react'
import ProfileImage from './ProfileImage'
import Ekstra from './Esktra'
import Mainbox from './MainBox'
import { Col, Container, Row } from 'react-bootstrap'

function ProfilePage() {
    return (
        <Container>
            <Row>
                <Col>
                    <ProfileImage />
                    <Ekstra />
                    <Ekstra />
                </Col>
                <Col xs={9}>
                    <Mainbox />
                </Col>
            </Row>
        </Container>
    )
}

export default ProfilePage