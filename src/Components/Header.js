import { Nav, Navbar, Button } from 'react-bootstrap';
import firebase from './FirebaseApi'

function Header({ user, setUser }) {
    const handleButton = () => {
        firebase.auth().signOut()
        setUser(null)
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">FakeBook</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">
                        <Button onClick={handleButton} >{user === null ? 'LogIn' : 'LogOut'}</Button>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}
export default Header;