import React from 'react';

import MainSlide from './slides/MainSlide';
import Slide1_1 from './slides/Slide1_1';
import Slide1_2 from './slides/Slide1_2';
import Slide1_3 from './slides/Slide1_3';
import './Category5.css';

const Category5 = () => (
  <section className="section">
    <div className="sectionBody">
      <MainSlide />
      <Slide1_1 />
      <Slide1_2 />
      <Slide1_3 />
    </div>
  </section>
);

export default Category5;
