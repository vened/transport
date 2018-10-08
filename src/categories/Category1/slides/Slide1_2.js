import { Icon } from 'antd';
import React from 'react';
import Title from '../../../components/Title/Title';
import Table from '../../../components/Table/Table';
import { DataCategory1_Slide1 } from '../../../stubs/DataCategory1';

const Slide1_2 = () => (
  <div className="slide active" id="Category1_Slide1_2">
    <div className="sectionBody">
      <Title variant3>
        Приложение 1
      </Title>

      <Table
        data={DataCategory1_Slide1}
        cells={[
          'id',
          'text',
          'price',
          'price2',
        ]}
      />
    </div>

    <a className="fp-controlArrow fp-back" href="#Category1">
      <Icon type="rollback" theme="outlined" />
    </a>
  </div>
);

export default Slide1_2;
