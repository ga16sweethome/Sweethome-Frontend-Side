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
          <a className='navbar-brand' href='/'>
            <img src={Logo} alt='logo SweetHome' />
          </a>
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
                <a className='nav-link active' aria-current='page' href='/'>
                  Our Service
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Showcase
                </a>
              </li>
              <li className='vr mx-2'></li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Login
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link disabled' href='/' aria-disabled='true'>
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarSection;
