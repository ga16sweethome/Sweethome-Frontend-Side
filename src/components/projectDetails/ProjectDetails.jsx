import { HeartIcons } from '../../assets';
import {PropertyDetails, ImageCard} from '../../components'
import {Button} from 'react-bootstrap';
import {useState} from 'react';
import GaleriView from './GaleriView';
import Kitchen from '../../assets/kitchen.jpg';
import ShowCaseAllVew from './ShowCaseAllVew';

const ProjectDetails = ()=>{
   const [showAllVew, setShowAllVew] = useState(false);
   const [show, setShow] = useState(false);

   return(
      <div className="projectDetails">
         <div className="row pb-4">
            <div className="col">
               <div className="projectTitle fs-3 fw-bold">
                  Apartement Living Room Redesign
               </div>
               <div className="projectLocation">
                  One East Apartement, Surabaya
               </div>
            </div>
            <div className="col d-flex align-items-center justify-content-end">
               <div className="appointmentButton me-5">
                  <Button className="px-4" variant="primary">Create Appointment</Button>
               </div>
               <div className="favouriteButton bg-light px-2 py-1 ms-3 rounded-circle shadow bg-body rounded">
                  <HeartIcons/>
               </div>
               <span className="text-primary fw-bold ps-3">Add to Favourite</span>
            </div>
         </div>
         <div className="row">
            <div className="col-7">
               <div className="row pb-3">
                  <div className="col me-2" onClick={()=>setShow(true)}>
                     <ImageCard
                        image = {Kitchen}
                        title = "Living Room"
                        classTitle = "mb-0 fs-6 fw-bold"
                        classOverlay = "d-flex align-items-end"
                     />
                  </div>
               </div>
               <div className="row d-flex flex-wrap pt-2">
                  <div className="col" onClick={()=>setShow(true)}>
                     <ImageCard
                        image = {Kitchen}
                        title = "Living Room"
                        classTitle = "mb-0 fs-6 fw-bold"
                        classOverlay = "d-flex align-items-end"
                     />
                  </div>
                  <div className="col" onClick={()=>setShow(true)}>
                     <ImageCard
                        image = {Kitchen}
                        title = "Living Room"
                        classTitle = "mb-0 fs-6 fw-bold"
                        classOverlay = "d-flex align-items-end"
                     />
                  </div>
                  <div className=" allImage col" onClick={() => setShowAllVew(true)}>
                     <ImageCard
                        image = {Kitchen}
                        title = "View All 18 Photos"
                        classTitle = "mb-0 fs-6 text-dark fw-bold text-center text-wrap w-50"
                        classOverlay = "d-flex bg-secondary bg-opacity-75 justify-content-center align-items-center"
                     />
                  </div>
               </div>
            </div>
            <div className="col">
               <PropertyDetails/>
            </div>
            <div className="showAllVew">
               <ShowCaseAllVew
               show={showAllVew}
               onHide={() => setShowAllVew(false)}
               dialogClassName="modal-fullscreen"
               aria-labelledby="example-custom-modal-styling-title"/>
            </div>
         </div>
         <div className="showImageModal">
            <GaleriView
               show={show}
               onHide={() => setShow(false)}
               dialogClassName="modal-fullscreen"
               aria-labelledby="example-custom-modal-styling-title"
            />
         </div>
      </div>
   )
}

export default ProjectDetails;