import { React, useEffect, useState } from 'react'
import ProfileImage from './ProfileImage'
import Ekstra from './Esktra'
import Mainbox from './MainBox'
import { Col, Container, Row } from 'react-bootstrap'
import facade from './ApiFacadeFakeBook'
import firebase from './FirebaseApi'
import SignUpMore from './SignUpMore'
import Members from './Members'

function ProfilePage() {

    const [hasSignedUp, setHasSignedUp] = useState(true)
    const [userInfo, setUserInfo] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        const user = firebase.auth().currentUser;
        if (user) {
            facade.getUserInfo(user.za).then((data) => {
                console.log(user.za)
                if(data === null){
                    setHasSignedUp(false)
                    setIsLoading(false)
                } else {
                    setUserInfo(data)
                    setIsLoading(false)
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    }, [])


    const Page = () => {
        return (
            <>
                <Col>
                    <ProfileImage />
                    <Ekstra userInfo={userInfo}/>
                </Col>
                <Col xs={9}>
                    <Mainbox />
                    <Members  />
                </Col>
            </>
        )
    }

    const Loading = () => {
        return (
            <h2>Loading...</h2>
        )
    }

    const MiddleMan = () => {
        return (
            <>
            {hasSignedUp ? <Page /> : <SignUpMore setUserInfo={setUserInfo} setHasSignedUp={setHasSignedUp} />}
            </>
        )
    }

    return (
        <Container>
            <Row>
                {isLoading ? <Loading /> : <MiddleMan />}
            </Row>
        </Container>
    )
}

export default ProfilePage