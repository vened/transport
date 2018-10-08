import React from 'react';

import MainSlide from './slides/MainSlide';
import Slide1_1 from './slides/Slide1_1';
import './Category3.css';

const Category3 = () => (
  <section className="section">
    <div className="sectionBody">
      <div className="slideGridCategoryAll">
        <MainSlide />
        <Slide1_1 />
      </div>
    </div>
  </section>
);

export default Category3;
