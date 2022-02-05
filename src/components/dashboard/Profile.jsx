import Dashboard from '../../layouts/Dashboard'
import image from '../../assets/img/profile.jpg'
import icon from '../../assets/icons/svg/plus.svg'

const Profile = ()=>{
   return(
      <div className="profileSection pt-5 mt-5">
         <Dashboard>
            <div className="d-flex flex-column mx-auto">
               <div className="welcomeText">
                  <h2 className="serif fw-bold py-4">
                     Welcome Home!
                  </h2>
               </div>
               <div className="profileContent  d-flex flex-row align-items-center">
                  <div className="imageSection">
                     <img className="imageProfile img-fluid" src={image} alt="image profile" />
                  </div>
                  <div className="detailProfile ps-4">
                     <h4 className="mb-0 fw-bold">
                        Ariana Grande
                     </h4>
                     <p className="mb-0">
                        arianagrande@gmail.com
                     </p>
                     <a href="#">Setting</a>
                  </div>
                  <div className="buttonSection text-end">
                     <button type="button" className="btn btn-primary px-5 py-3 shadow-sm">
                        <div className="buttonContent align-items-center">
                        <img src={icon} alt="button icon" />
                        <span className="ps-4"><b>Create Appointement</b></span>
                        </div>
                     </button>
                  </div>
               </div>
            </div>
         </Dashboard>
      </div>
   )
}

export default Profile;