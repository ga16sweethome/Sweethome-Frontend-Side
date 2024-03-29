import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/svg/SweetHome.svg';
import { useState } from 'react';
import { Login, Register } from '../../components';

const NavbarSection = (props) => {
  const background = props.background;

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className='NavbarSection'>
      <Navbar
        collapseOnSelect
        expand='md'
        bg={background && 'white'}
        fixed='top'
        variant='light'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/' className='p-2'>
            <img src={Logo} alt='logo SweetHome' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/services' className='fw-bold'>
                Our Service
              </Nav.Link>
              <Nav.Link as={Link} to='/showcase' className='fw-bold'>
                Showcase
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                onClick={(e) => {
                  e.preventDefault();
                  setShowLogin(true);
                }}
                as={Link}
                to='/login'
                className='fw-bold text-secondary'>
                Login
              </Nav.Link>
              <Nav.Link
                onClick={(e) => {
                  e.preventDefault();
                  setShowRegister(true);
                }}
                as={Link}
                to='/signup'
                className='fw-bold text-secondary'>
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Login show={showLogin} onHide={() => setShowLogin(false)} />
        <Register show={showRegister} onHide={() => setShowRegister(false)} />
      </Navbar>

      {/* {showLogin && <LoginForm onClose={() => {
        setShowLogin(false)
      }} />} */}
      {/* <Routes>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
       */}
    </div>
  );
};

export default NavbarSection;
