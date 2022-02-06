import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FilterCheckbox,
  InputSearch,
  PaginationComponents,
  ProjectCard,
} from '../components';
import Default from '../layouts/Default';
import { HomeIcons } from '../assets';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilter } from '../redux/actionCreators/filterAction';

const Showcase = () => {
  const { sections, styles } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const sectionsCategories = Object.keys(sections);
  const stylesCategories = Object.keys(styles);

  const isFiltered =
    Object.values(sections).find((value) => value === true) ||
    Object.values(styles).find((value) => value === true);

  return (
    <>
      <Default>
        <div className='Showcase py-5'>
          <Breadcrumb className='mt-4 py-3'>
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
              {isFiltered ? (
                <button
                  className='btn btn-link text-decoration-underline mb-2 px-0'
                  onClick={() => dispatch(resetFilter())}>
                  Remove Filter
                </button>
              ) : (
                <h5 className='fw-bold fs-6'>All Projects</h5>
              )}
              <FilterCheckbox title='Sections' data={sectionsCategories} />
              <FilterCheckbox title='Styles' data={stylesCategories} />
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
                <PaginationComponents />
              </div>
            </div>
          </div>
        </div>
      </Default>
    </>
  );
};

export default Showcase;
