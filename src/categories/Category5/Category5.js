import React from 'react';

import MainSlide from './slides/MainSlide';
// import Category5Slide1_1 from './slides/Category5Slide1_1';
import './Category5.css';

const Category5 = () => (
  <section className="section">
    <div className="sectionBody">
      <div className="slideGridCategoryAll">
        <MainSlide />
        {/*<Category5Slide1_1 />*/}
      </div>
    </div>
  </section>
);

export default Category5;
