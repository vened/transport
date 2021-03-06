import React from 'react';
import { Icon } from 'antd';
import Title from '../../../components/Title/Title';
import img from '../assets/shar.png';

const Slide1_5 = () => (
  <div className="slide" id="Category3_Slide1_5">
    <div className="sectionBody">
      <Title variant3>
        Точка роста Шереметьево
      </Title>
    </div>

    <div style={{ textAlign: 'center' }}>
      <img src={img} alt="" height="1000"/>
    </div>

    <a className="fp-controlArrow fp-back" href="#Category2">
      <Icon type="rollback" theme="outlined" />
    </a>
  </div>
);

export default Slide1_5;
