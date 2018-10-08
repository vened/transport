import { Icon } from 'antd';
import React from 'react';
import Title from '../../components/Title/Title';
import img from './assets/category7.jpg';
import './Category7.css';

const Category7 = () => (
  <section className="section">
    <div className="sectionBody">
      <div className="slideGridCategory7">
        <div className="slideGridCategory7Sidebar">
          <Title count={7} className="Category7Title">
            Утверждение красных линий планируемых транспортных инфраструктур (региональных транспортных коридоров, автомобильных дорог I –
            III категории, ЛРТ)
          </Title>
        </div>
        <div className="slideGridCategory7Map">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
    <a className="fp-controlArrow fp-back" href="#Page2">
      <Icon type="rollback" theme="outlined" />
    </a>
  </section>
);

export default Category7;
