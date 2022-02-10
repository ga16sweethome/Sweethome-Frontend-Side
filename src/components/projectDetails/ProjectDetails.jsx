import { HeartIcons } from '../../assets';
import {PropertyDetails, ImageCard} from '../../components'
import Kitchen from '../../assets/kitchen.jpg';

const ProjectDetails = ()=>{
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
               <div className="favouriteButton bg-light px-2 py-1 rounded-circle shadow bg-body rounded">
                  <HeartIcons/>
               </div>
               <span className="text-primary fw-bold ps-3">Add to Favourite</span>
            </div>
         </div>
         <div className="row">
            <div className="col-7">
               <div className="row pb-3">
                  <ImageCard
                     image = {Kitchen}
                     title = "Living Room"
                     classTitle = "mb-0 fs-6 fw-bold"
                     classOverlay = "d-flex align-items-end"
                  />
               </div>
               <div className="row d-flex flex-wrap pt-2">
                  <div className="col">
                     <ImageCard
                        image = {Kitchen}
                        title = "Living Room"
                        classTitle = "mb-0 fs-6 fw-bold"
                        classOverlay = "d-flex align-items-end"
                     />
                  </div>
                  <div className="col">
                     <ImageCard
                        image = {Kitchen}
                        title = "Living Room"
                        classTitle = "mb-0 fs-6 fw-bold"
                        classOverlay = "d-flex align-items-end"
                     />
                  </div>
                  <div className="col">
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
         </div>
      </div>
   )
}

export default ProjectDetails;