import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarCustom = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary nav-text" bg="dark" data-bs-theme="dark">
      <Container className='me-2'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex ">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/schedule-abstracts">Schedule & Abstracts</Nav.Link>
            <Nav.Link href="/registration">Registration</Nav.Link>
            <Nav.Link href="/practical-info">Practical Informations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    

  )
}

export default NavbarCustom