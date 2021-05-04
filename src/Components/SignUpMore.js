import { useRef, React } from 'react'
import { Form, Button, Alert, Row, Container, Col} from 'react-bootstrap'
import facade from './ApiFacadeFakeBook'
import firebase from './FirebaseApi'

function SignUpMore({ setUserInfo, setHasSignedUp }) {
    const nameRef = useRef()
    const phoneRef = useRef()
    const sexRef = useRef()



    const handleSubmit = (e) => {
        e.preventDefault()

        const user = firebase.auth().currentUser;

        if (user){
            const body = {
                uid : user.uid,
                name : nameRef.current.value,
                phoneNumber : phoneRef.current.value,
                sex : sexRef.current.value
            }

            facade.addUserInfo(body, user.za).then((data) => {
                setUserInfo(data)
                setHasSignedUp(true)
            }).catch((error) => {
                console.log(error)
            })
                
        }

    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form className="mt-4" onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control ref={phoneRef} type="number" placeholder="Enter Phone" />
                        </Form.Group>
                        <Form.Group controlId="sex">
                            <Form.Label>Sex</Form.Label>
                            <Form.Control ref={sexRef} type="text" placeholder="Enter sex" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUpMore
