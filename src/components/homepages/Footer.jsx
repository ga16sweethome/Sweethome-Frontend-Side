import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='Footer flex-column'>
      <div className='footer-top bg-wheat p-5'>
        <div className='row m-0'>
          <div className='about col-md-6 col-sm-6'>
            <h2 className='footer-title fw-bold fs-1'>Ready To Get Started?</h2>
            <p className='footer-subtitle text-ash py-4'>
              Pellentesque odio sed dui quis mauris <br /> nulla sagittis mauris
              lacus.
            </p>
            <p>
              Have questions?{' '}
              <a className='FAQ-link' href='/'>
                check our FAQs
              </a>
            </p>
          </div>
          <div className='footer-list col-md-2 col-sm-2'>
            <h4 className='fw-bold fs-6'>Idea</h4>
            <ul className='list-unstyled'>
              <li className='lh-lg'>
                <a href='/'> Living Room</a>
              </li>
              <li className='lh-lg'>
                <a href='/'>Kitchen</a>
              </li>
              <li className='lh-lg'>
                <a href='/'>Bedroom</a>
              </li>
              <li className='lh-lg'>
                <a href='/'>Garden</a>
              </li>
            </ul>
          </div>
          <div className='footer-list col-md-2 col-sm-2'>
            <h4 className='fw-bold fs-6'>SweetOffice</h4>
            <ul className='list-unstyled'>
              <li className='lh-lg'>
                <a href='/'>For office</a>
              </li>
              <li className='lh-lg'>
                <a href='/'>For School</a>
              </li>
              <li className='lh-lg'>
                <a href='/'>FAQ</a>
              </li>
            </ul>
          </div>
          <div className='footer-list col-md-1 col-sm-2'>
            <ul className='list-unstyled'>
              <h4 className='fw-bold fs-6'>Resources</h4>
              <li className='lh-lg'>
                <a href='/'>Contact Us</a>
              </li>
              <li className='lh-lg'>
                <a href='/'>About</a>
              </li>
              <li className='lh-lg'>
                <a href='/'>Careers</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='row footer-bottom p-4 d-flex bg-secondary justify-content-between w-100'>
        <p className='fw-bold col-11'>
          Copyright, SweetHome 2022, All Right Reserve
        </p>
        <div className='sosmed-btn fs-5 col-1 d-flex justify-content-between'>
          <a className='text-dark' href='/'>
            <FaFacebookF />
          </a>
          <a className='text-dark' href='/'>
            <AiOutlineInstagram />
          </a>
          <a className='text-dark' href='/'>
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
