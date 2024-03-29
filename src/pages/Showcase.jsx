import axios from 'axios';
import { Breadcrumb, Placeholder } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  CardLoading,
  FilterCheckbox,
  FilterLoading,
  InputSearch,
  PaginationComponents,
  ProjectCard,
} from '../components';
import Default from '../layouts/Default';
import { HomeIcons } from '../assets';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSectionsFilter,
  getStylesFilter,
  resetFilter,
} from '../redux/actionCreators/filterAction';
import { useEffect, useState } from 'react';
import { scrollToTop } from '../utility/scroll';

const Showcase = () => {
  const { sections, styles } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [contents, setContents] = useState([]);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    dispatch(getSectionsFilter());
    dispatch(getStylesFilter());

    axios({
      method: 'get',
      url: `${process.env.REACT_APP_BASE_API}showcase?page=1`,
    })
      .then((response) => {
        setContents(response.data.data);
        setPages(response.data.jumlahPage);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  const isFiltered =
    Object.values(sections).find((value) => value === true) ||
    Object.values(styles).find((value) => value === true);

  return (
    <>
      <Default>
        <div className='Showcase container py-1'>
          <Breadcrumb className='mt-4 py-3'>
            <span className='text-ash me-3'>
              <HomeIcons />
            </span>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Showcase</Breadcrumb.Item>
          </Breadcrumb>
          {isLoading ? (
            <>
              <Placeholder as='h2' animation='glow' className='w-100 mb-4'>
                <Placeholder xs={7} />
                <br />
                <Placeholder xs={4} />
              </Placeholder>
              <Placeholder as='p' animation='glow mb-5'>
                <Placeholder xs={5} />
              </Placeholder>
              <div className='showcase-wrapper row'>
                <div className='col-3 mt-2 filter'>
                  <Placeholder as='h5' animation='glow'>
                    <Placeholder xs={6} />
                  </Placeholder>
                  <FilterLoading />
                </div>

                {/* Placeholder Input Search */}
                <div className='projects col d-flex flex-column'>
                  <Placeholder
                    as='h3'
                    xs={6}
                    animation='glow'
                    className='search mb-4 ps-lg-3 w-100 d-flex justify-content-end'>
                    <Placeholder xs={12} lg={6} />
                  </Placeholder>
                  <div className='row g-4 mb-4'>
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                  </div>
                  <div className='d-flex justify-content-end mb-5'>
                    <PaginationComponents />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
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
                  <FilterCheckbox title='Sections' data={sections.result} />
                  <FilterCheckbox title='Styles' data={styles.result} />
                </div>
                <div className='projects col'>
                  <div className='search ms-auto mb-3 ps-lg-3 w-50'>
                    <InputSearch />
                  </div>
                  <div className='row g-4 mb-4'>
                    {contents &&
                      contents.map((content, idx) => (
                        <ProjectCard data={content} key={idx} />
                      ))}
                  </div>
                  <div className='d-flex justify-content-end mb-5'>
                    <PaginationComponents pages={pages} />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </Default>
    </>
  );
};

export default Showcase;
