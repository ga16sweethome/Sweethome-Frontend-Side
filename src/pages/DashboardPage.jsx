import { Profile, DashboardContent } from '../components';
import LandingPage from '../layouts/LandingPage';


const DashboardPage = ()=>{
   return(
      <LandingPage>
         <div className="dashboardPage">
            <Profile/>
            <DashboardContent/>
         </div>
      </LandingPage>
   )
}

export default DashboardPage;