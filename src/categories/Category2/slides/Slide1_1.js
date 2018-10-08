import React from 'react';
import { Icon } from 'antd';
import Title from '../../../components/Title/Title';
import Table from '../../../components/Table/Table';
import { DataCategory2_Slide_1 } from '../../../stubs/DataCategory2_slide_1';
import img2 from '../assets/678687_building_512x522.png';

const Slide1_1 = () => (
  <div className="slide" id="Category3_Slide1_1">
    <div className="sectionBody">
      <Title variant3>
        Перечень автомобильных дорог к точкам роста
      </Title>

      <Table
        data={DataCategory2_Slide_1}
        cells={[
          'id',
          'text',
          'price',
        ]}
      />

      <a className="goAeroport" href="#Category2/5">
        <img src={img2} alt="" width="80" />
        <span className="goAeroportText">
          Аэропорт
          <br />
          Домодедово
          <br />
          подробнее...
        </span>
      </a>

    </div>

    <a className="fp-controlArrow fp-back" href="#Category2">
      <Icon type="rollback" theme="outlined" />
    </a>
  </div>
);

export default Slide1_1;
