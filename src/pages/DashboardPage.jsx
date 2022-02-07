import { Profile, DashboardContent } from '../components';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HomeIcons } from '../assets';
import LandingPage from '../layouts/LandingPage';
import Dashboard from '../layouts/Dashboard';

const DashboardPage = ()=>{
   return(
      <LandingPage>
         <div className="dashboardPage d-flex mx-auto pt-5 mt-5">
            <Dashboard>
               <Breadcrumb className='py-3'>
                  <span className='text-ash me-3'>
                  <HomeIcons />
                  </span>
                  <Breadcrumb.Item linkas={Link} linkprops={{ to: '/' }}>
                  Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
               </Breadcrumb>
               <Profile/>
               <DashboardContent/>
            </Dashboard>
         </div>
      </LandingPage>
   )
}

export default DashboardPage;