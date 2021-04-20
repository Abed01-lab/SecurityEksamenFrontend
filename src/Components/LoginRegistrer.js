import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function LoginRegistrer( {children}) {
    const [isLoggedin, setstate] = React.useState(true)
    if( isLoggedin) return <div>{children}</div>;
    return (
        <Container className='security'>
            <Row>
                <Col className='line'>
                    login
                <form className='loginRegister'>
                        <label >
                            Email:
                        <input type='email' name='email' />
                        </label>
                        <label>
                            Password:
                        <input type='password' name='password' />
                        </label>
                        <input type='submit' value='Login'/>
                    </form>
                </Col>
                <Col>
                    Registrer
                <form className='loginRegister'>
                        <label >
                            Email:
                        <input type='email' name='email' />
                        </label>
                        <label>
                            Password:
                        <input type='password' name='password' />
                        </label>
                        <label>
                            Password:
                        <input type='password' name='password' />
                        </label>
                        <input type='submit'value='Register' />
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginRegistrer
