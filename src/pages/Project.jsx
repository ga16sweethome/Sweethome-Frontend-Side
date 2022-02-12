import Default from '../layouts/Default';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProjectDetails } from '../components';
import { HomeIcons } from '../assets';


const Project = ()=>{
   return(
      <Default>
         <div className="projectPage mx-auto">
            <Breadcrumb className='mt-4 py-3'>
               <span className='text-ash me-3'>
               <HomeIcons />
               </span>
               <Breadcrumb.Item linkas={Link} linkprops={{ to: '/' }}>
                  Home
               </Breadcrumb.Item>
               <Breadcrumb.Item active>Showcase</Breadcrumb.Item>
            </Breadcrumb>
            <ProjectDetails/>
            
         </div>
      </Default>
   )
}

export default Project;