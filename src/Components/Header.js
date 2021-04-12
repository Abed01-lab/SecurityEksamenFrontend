import { Nav, Navbar } from 'react-bootstrap';
import facade from './ApiFacade'

function Header() {
    
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">Welcome to Abeds Front End</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>                    
                    <Nav.Link href="/login">
                        {!facade.loggedIn() ? "login" : "Logout"}
                        
                    </Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}
export default Header;