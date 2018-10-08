import React from 'react';
import Title from '../../components/Title/Title';
import img from './assets/category7.jpg';
import './Category7.css';

const Category7 = () => (
  <section className="section">
    <div className="sectionBody">
      <div className="slideGrid slideGridCategory7">
        <div className="slideGridSidebar">
          <Title count={7} className="Category7Title">
            Реконструкция объектов транспортной инфраструктуры на территории г. Москвы и МО (развязки МКАД), установление красных линий ЛРТ
            в точках состыковки с будущими линиями Московского метрополитена
          </Title>
        </div>
        <div className="slideGridMap slideGridMap_Category7">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  </section>
);

export default Category7;
