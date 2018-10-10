import React from 'react';

import MainSlide from './slides/MainSlide';
import Slide1_1 from './slides/Slide1_1';
import Slide1_2 from './slides/Slide1_2';
import Slide1_3 from './slides/Slide1_3';
import Slide1_4 from './slides/Slide1_4';
import './Category3.css';

const Category3 = () => (
  <section className="section">
    <div className="sectionBody">
      <MainSlide />
      <Slide1_1 />
      <Slide1_2 />
      <Slide1_3 />
      <Slide1_4 />
    </div>
  </section>
);

export default Category3;
