import React from 'react';

import MainSlide from './slides/MainSlide';
import Slide1_1 from './slides/Slide1_1';
import Slide1_2 from './slides/Slide1_2';
import Slide2_1 from './slides/Slide2_1';
import Slide2_2 from './slides/Slide2_2';
import './Category1.css';

const Category1 = () => (
  <section className="section">
    <div className="sectionBody">
      <div className="slideGridCategoryAll">
        <MainSlide />
        <Slide1_1 />
        <Slide1_2 />
        <Slide2_1 />
        <Slide2_2 />
      </div>
    </div>
  </section>
);

export default Category1;
