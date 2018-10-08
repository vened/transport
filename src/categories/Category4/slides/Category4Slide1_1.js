import { Icon } from 'antd';
import React from 'react';
import Title from '../../../components/Title/Title';
import Table from '../../../components/Table/Table';
import { DataCategory4 } from '../../../stubs/DataCategory4';

import img from '../assets/map.jpg';

const Category4Slide1_1 = () => (
  <div className="slide active" id="Category4_Slide1_1">
    <div className="sectionBody">
      <Title>
        Строительство ТПУ на МЦД
      </Title>
      <div className="slideGrid">
        <div className="slideGridSidebar" style={{width: "auto"}}>
          <Table
            className="Category4Table"
            data={DataCategory4}
            cells={[
              'id',
              'text',
              'price',
            ]}
          />
        </div>
        <div className="slideGridMap slideGridMap_Category4_Slide1_1" style={{width: "auto"}}>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
    <a className="fp-controlArrow fp-back" href="#Category4">
      <Icon type="rollback" theme="outlined" />
    </a>
  </div>
);

export default Category4Slide1_1;
