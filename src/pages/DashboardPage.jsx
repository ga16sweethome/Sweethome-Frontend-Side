import { Profile, DashboardPage } from '../components';
import LandingPage from '../layouts/LandingPage';


const DashboardPage = ()=>{
   return(
      <LandingPage>
         <div className="dashboardPage">
            <Profile/>
            <DashboardPage/>
         </div>
      </LandingPage>
   )
}

export default DashboardPage;