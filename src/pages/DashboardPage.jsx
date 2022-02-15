import { Profile, DashboardContent } from '../components';
import { Breadcrumb, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HomeIcons } from '../assets';
import Default from '../layouts/Default';

const DashboardPage = () => {
  return (
    <Default>
      <div className='dashboardPage d-flex mx-auto pt-4 mt-5'>
        <Container>
          <Breadcrumb className='py-3'>
            <span className='text-ash me-3'>
              <HomeIcons />
            </span>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <Profile />
          <DashboardContent />
        </Container>
      </div>
    </Default>
  );
};

export default DashboardPage;
