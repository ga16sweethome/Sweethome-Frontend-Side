import { Breadcrumb, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FilterCheckbox, InputSearch, ProjectCard } from '../components';
import Default from '../layouts/Default';
import { HomeIcons } from '../assets';

const Showcase = () => {
  const sections = [
    'Living Room',
    'Dining Room',
    'Bedroom',
    'Kitchen',
    'Bathroom',
    'Study/Office',
    'Outdoor',
  ];

  const styles = [
    'Modern',
    'Contemporary',
    'Minimalist',
    'Industrial',
    'Scandinavian',
    'Traditional',
    'Natural',
    'Rustic',
    'Bohemian',
  ];
  return (
    <>
      <Default>
        <div className='Showcase'>
          <Breadcrumb className='py-3'>
            <span className='text-ash me-3'>
              <HomeIcons />
            </span>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Showcase</Breadcrumb.Item>
          </Breadcrumb>
          <h2 className='h1 fw-bold serif'>
            Nisi, pellentesque ullamcorper enim libero, fusce sit nulla
            maecenas.
          </h2>
          <p className='text-ash mb-5'>
            Nisi, pellentesque ullamcorper enim libero, fusce sit nulla
            maecenas.
          </p>
          <div className='showcase-wrapper row'>
            <div className='col-3 mt-2 filter'>
              <button className='btn btn-link text-decoration-underline mb-2 px-0'>
                Remove Filter
              </button>
              <FilterCheckbox title='Sections' data={sections} />
              <FilterCheckbox title='Styles' data={styles} />
            </div>
            <div className='projects col'>
              <div className='search ms-auto mb-3 ps-3 w-50'>
                <InputSearch />
              </div>
              <div className='row g-4 mb-4'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
              </div>
              <div className='d-flex justify-content-end mb-5'>
                <Pagination>
                  <Pagination.Prev />
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Item>{5}</Pagination.Item>
                  <Pagination.Ellipsis />
                  <Pagination.Next />
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </Default>
    </>
  );
};

export default Showcase;
