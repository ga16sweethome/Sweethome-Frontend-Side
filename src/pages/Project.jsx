import Default from '../layouts/Default';
import { Breadcrumb, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProjectDetails } from '../components';
import { HomeIcons } from '../assets';

const Project = () => {
  return (
    <Default>
      <Container>
        <div className='projectPage py-5'>
          <Breadcrumb className='mt-4 py-3'>
            <span className='text-ash me-3'>
              <HomeIcons />
            </span>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Showcase</Breadcrumb.Item>
          </Breadcrumb>
          <ProjectDetails />
        </div>
      </Container>
    </Default>
  );
};


export default Project;
