import React from "react";
import { useRef, useState } from "react";
import { Col, Container, Form, Row, Button, Alert } from "react-bootstrap";
import firebase from "./FirebaseApi";
import "./Doc.css";

function LoginRegister({ setUser, user }) {
    const [error, setError] = useState();

    const loginEmailRef = useRef();
    const loginPasswordRef = useRef();

    const signupEmailRef = useRef();
    const signupPasswordRef = useRef();
    const reConfirmPasswordRef = useRef();

    function handleSignUp(e) {
        e.preventDefault();
        setError("");

        if (
            signupPasswordRef.current.value !==
            reConfirmPasswordRef.current.value
        ) {
            return setError("Password does not match");
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(
                signupEmailRef.current.value,
                signupPasswordRef.current.value
            )
            .then(function (user) {
                setUser(user);
            })
            .catch(function (error) {
                setError(error.message);
            });
    }

    function handleSignIn(e) {
        e.preventDefault();
        setError("");
        firebase
            .auth()
            .signInWithEmailAndPassword(
                loginEmailRef.current.value,
                loginPasswordRef.current.value
            )
            .then((user) => {
                setUser(user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const LoginComponent = () => {
        return (
            <div>
                {error && (
                    <Alert className="mt-4" variant="danger">
                        {error}
                    </Alert>
                )}
                <Row>
                    <Col>
                        <h4>Log In</h4>
                        <Form className="mt-4" onSubmit={handleSignIn}>
                            <Form.Group controlId="login-email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    ref={loginEmailRef}
                                    placeholder="Enter email"
                                />
                            </Form.Group>
                            <Form.Group controlId="login-password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    ref={loginPasswordRef}
                                    placeholder="Password"
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Log In
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        <h4>Sign Up</h4>
                        <Form className="mt-4" onSubmit={handleSignUp}>
                            <Form.Group controlId="signup-email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    ref={signupEmailRef}
                                    placeholder="Enter email"
                                />
                            </Form.Group>
                            <Form.Group controlId="signup-password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    ref={signupPasswordRef}
                                    placeholder="Password"
                                />
                            </Form.Group>
                            <Form.Group controlId="re-signup-password">
                                <Form.Label>Re-enter Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    ref={reConfirmPasswordRef}
                                    placeholder="Password"
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    };

    return (
        <Container className="security">
            <LoginComponent />
        </Container>
    );
}

export default LoginRegister;
