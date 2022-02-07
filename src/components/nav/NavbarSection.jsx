import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/svg/SweetHome.svg';

const NavbarSection = (props) => {
  const background = props.background;

  return (
    <div className='NavbarSection'>
      <Navbar
        collapseOnSelect
        expand='md'
        bg={background && 'white'}
        fixed='top'
        variant='light'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src={Logo} alt='logo SweetHome' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/services'>
                Our Service
              </Nav.Link>
              <Nav.Link as={Link} to='/showcase'>
                Showcase
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to='/login'>
                Login
              </Nav.Link>
              <Nav.Link as={Link} to='/signup'>
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarSection;
