import { Container, Nav, Navbar } from 'react-bootstrap';
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
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            <img src={Logo} alt='logo SweetHome' />
<<<<<<< HEAD
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='/navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link className='fw-bold nav-link active' aria-current='page' to='/'>
                  Our Service
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='fw-bold nav-link active' to='/showcase'>
                  Showcase
                </Link>
              </li>
              <li className='vr mx-2'></li>
              <li className='nav-item'>
                <Link className='text-secondary fw-bold nav-link active' to='/'>
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link className=' text-secondary fw-bold nav-link active' to='/'>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
=======
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
>>>>>>> c88890d35e680afa72320726d841ec2c36029bd9
    </div>
  );
};

export default NavbarSection;
