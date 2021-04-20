import { Nav, Navbar } from 'react-bootstrap';
import facade from './ApiFacade'

function Header() {
    
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">FakeBook</Navbar.Brand>
                <Nav className="mr-auto">                  
                    <Nav.Link href="/">
                        {!facade.loggedIn() ? "login" : "Logout"}
                        
                    </Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}
export default Header;