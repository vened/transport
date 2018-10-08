import React from 'react';

import MainSlide from './slides/MainSlide';
import Slide1_1 from './slides/Slide1_1';
import Slide1_2 from './slides/Slide1_2';
import Slide1_3 from './slides/Slide1_3';
import Slide1_4 from './slides/Slide1_4';
import Slide2_1 from './slides/Slide2_1';
import Slide2_2 from './slides/Slide2_2';
import Slide2_3 from './slides/Slide2_3';
import Slide2_4 from './slides/Slide2_4';
import Slide2_5 from './slides/Slide2_5';
import './Category1.css';

const Category1 = () => (
  <section className="section">
    <div className="sectionBody">
      <div className="slideGridCategoryAll">
        <MainSlide />
        <Slide1_1 />
        <Slide1_2 />
        <Slide1_3 />
        <Slide1_4 />
        <Slide2_1 />
        <Slide2_2 />
        <Slide2_3 />
        <Slide2_4 />
        <Slide2_5 />
      </div>
    </div>
  </section>
);

export default Category1;
