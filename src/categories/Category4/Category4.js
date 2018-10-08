import React from 'react';

import MainSlide from './slides/MainSlide';
import Category4Slide1_1 from './slides/Category4Slide1_1';
import './Category4.css';

const Category4 = () => (
  <section className="section">
    <div className="sectionBody">
      <div className="slideGridCategoryAll">
        <MainSlide />
        <Category4Slide1_1 />
      </div>
    </div>
  </section>
);

export default Category4;
