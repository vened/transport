import { Icon } from 'antd';
import React from 'react';
import Title from '../../components/Title/Title';
import img from './assets/category6_1.jpg';
import './Category6.css';

const Category6 = () => (
  <section className="section">
    <div className="sectionBody">
      <Title count={6} className="Category6Title">
        Реконструкция объектов транспортной инфраструктуры на территории г. Москвы и МО (развязки МКАД), установление красных линий ЛРТ
        в точках состыковки с будущими линиями Московского метрополитена
      </Title>
      <div className="slideGridCategory6Map">
        <img src={img} alt="" width={1500} />
      </div>
    </div>
    <a className="fp-controlArrow fp-back" href="#Page2">
      <Icon type="rollback" theme="outlined" />
    </a>
  </section>
);

export default Category6;
