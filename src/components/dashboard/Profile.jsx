import image from '../../assets/img/profile.jpg';
import icon from '../../assets/icons/svg/plus.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ProfileSetting from './ProfileSetting';

const Profile = () => {
   const [showSetting, setShowSetting] = useState(false);
  return (
    <div className='profileSection'>
      <div className='d-flex flex-column mx-auto'>
        <div className='welcomeText'>
          <h2 className='serif fw-bold py-4'>Welcome Home!</h2>
        </div>
        <div className='profileContent  d-flex flex-row align-items-center'>
          <div className='imageSection'>
            <img className='imageProfile img-fluid' src={image} alt='profile' />
          </div>
          <div className='detailProfile ps-4'>
            <h4 className='mb-0 fw-bold'>Ariana Grande</h4>
            <p className='mb-0'>arianagrande@gmail.com</p>
            <button 
               className="border-0 bg-transparent p-0"
               onClick={() => setShowSetting(true)} 
            >
               Setting
            </button>
          </div>
          <div className='buttonSection text-end'>
            <button
              type='button'
              className='btn btn-primary px-5 py-3 shadow-sm'>
              <div className='buttonContent align-items-center'>
                <img src={icon} alt='button icon' />
                <span
                  className='ps-4 fw-bold'
                  linkas={Link}
                  linkprops={{ to: '/' }}>
                  Create Appointement
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="showSetting">
         <ProfileSetting
            show={showSetting}
            onHide={() => setShowSetting(false)}
         />
      </div>
    </div>
  );
};

export default Profile;
