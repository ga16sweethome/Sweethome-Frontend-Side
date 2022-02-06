import {Tabs, Tab} from 'react-bootstrap'
import AppointmentResume  from './AppointmentResume';
import ProjectResume from './ProjectResume';
import FavouriteSection from './FavouriteSection';

const DashboardContent =()=>{
   return(
      <div className="dashboardContent pt-5">
         <Tabs defaultActiveKey="appointment" id="uncontrolled-tab-example" className="mb-5 pt-5">
            <Tab eventKey="appointment" title="Appointment">
               <AppointmentResume/>
            </Tab>
            <Tab eventKey="project" title="Project">
               <ProjectResume/>
            </Tab>
            <Tab eventKey="pavourite" title="Favourite">
               <FavouriteSection/>
            </Tab>
         </Tabs>
      </div>
   )
}

export default DashboardContent;