import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/svg/SweetHome.svg';

const NavbarSection = (props) => {
  const background = props.background;

  return (
    <div className='NavbarSection'>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-light ${
          background && 'bg-white'
        } `}>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <img src={Logo} alt='logo SweetHome' />
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
    </div>
  );
};

export default NavbarSection;
