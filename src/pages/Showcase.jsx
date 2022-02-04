import React from 'react';
import { FilterCheckbox, ProjectCard } from '../components';

const Showcase = () => {
  return (
    <div className='Showcase'>
      <h1>Showcase</h1>
      <div className='filter'>
        <FilterCheckbox />
      </div>
      <div className='projects'>
        <ProjectCard />
      </div>
    </div>
  );
};

export default Showcase;
