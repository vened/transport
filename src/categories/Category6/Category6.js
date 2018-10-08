import React from 'react';
import Title from '../../components/Title/Title';
import img from './assets/category6.jpg';
import './Category6.css';

const Category6 = () => (
  <section className="section">
    <div className="sectionBody">
      <div className="slideGridCategory6">
        <div className="slideGridCategory6Sidebar">
          <Title count={6} className="Category6Title">
            Реконструкция объектов транспортной инфраструктуры на территории г. Москвы и МО (развязки МКАД), установление красных линий ЛРТ
            в точках состыковки с будущими линиями Московского метрополитена
          </Title>
        </div>
        <div className="slideGridCategory6Map">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  </section>
);

export default Category6;
