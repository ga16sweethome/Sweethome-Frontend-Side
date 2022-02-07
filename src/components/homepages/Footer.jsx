import {FaLinkedinIn} from 'react-icons/fa'
import { FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import AppStoreBtn from '../../assets/icons/appStore.svg'
import GoogleStoreBtn from '../../assets/icons/googlePlayStore.svg'


const Footer = () => {
  return (
    <footer className="flex-column">
      <div className="footer-top py-5">
        <div className="row">
          <div className="about col-md-9 col-sm-6">
            <h2>Ready To Get <br/>Started?</h2>
            <p>Pellentesque odio sed dui quis mauris <br/> nulla sagittis mauris lacus.</p>
            <h4>Have questions? <a className='hoverAja' href='/'>check our FAQs</a></h4>
          </div>
          <div className="footer-list col-md-1 col-sm-2">
            <h5>Idea</h5>
            <ul className="list-unstyled">
              <li>
                <a href='/'> Living Room</a>
              </li>
              <li>
                <a href='/'>Kitchen</a>
              </li>
              <li>
                <a href='/'>Bedroom</a>
              </li>
              <li>
                <a href='/'>Garden</a>
              </li>
            </ul>
    
          </div>
          <div className="footer-list col-md-1 col-sm-2">
            <h5>SweetOffice</h5>
            <ul className="list-unstyled">
              <li>
                <a href='/'>For office</a>
              </li>
              <li>
                <a href='/'>For School</a>
              </li>
              <li>
                <a href='/'>FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-list col-md-1 col-sm-2">
            <ul className="list-unstyled">
              <h5>Resources</h5>
              <li>
                <a href='/'>Contact Us</a>
              </li>
              <li>
                <a href='/'>About</a>
              </li>
              <li>
                <a href='/'>Careers</a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
        <div className="footer-bottom container-fluid px-4 d-flex bg-secondary justify-content-between w-100">
          <p className="text-xs-left">Copyright, SweetHome 2022, All Right Reserve</p>
          <div className="sosmed-btn">
          <a className="text-xs-right" href='/'><FaFacebookF/></a>
          <a className="text-xs-right" href='/'><AiOutlineInstagram/></a>
          <a className="text-xs-right" href='/'><FaLinkedinIn/></a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
