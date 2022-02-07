import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/svg/SweetHome.svg';

const NavbarSection = (props) => {
  const background = props.background;

  return (
    <div className='NavbarSection'>
      <Navbar
        variant='light'
        bg={background && 'white'}
        expand='lg'
        className={`fixed-top navbar-expand-lg navbar-light`}>
        <Container>
          <Navbar.Brand as={Link} className='navbar-brand' to='/'>
            <img src={Logo} alt='logo SweetHome' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='offcanvasNavbar' />
          <Navbar.Offcanvas
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
            placement='end'>
            <Offcanvas.Header closeButton />
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link as={Link} to='/services'>
                  Our Service
                </Nav.Link>
                <Nav.Link as={Link} to='/showcase'>
                  Showcase
                </Nav.Link>
                <hr />
                <Nav.Link as={Link} to='/login'>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to='/signup'>
                  Sign Up
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Nav className='justify-content-end flex-grow-1 pe-3'>
            <Nav.Link as={Link} to='/services'>
              Our Service
            </Nav.Link>
            <Nav.Link as={Link} to='/showcase'>
              Showcase
            </Nav.Link>
            <i className='vr mx-2'></i>
            <Nav.Link as={Link} to='/login'>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to='/signup'>
              Sign Up
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarSection;
