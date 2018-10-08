import React from 'react';
import { Icon } from 'antd';
import Title from '../../../components/Title/Title';
import Table from '../../../components/Table/Table';
import { DataCategory3_slide_2 } from '../../../stubs/DataCategory3_slide_2';

const Slide1_1 = () => (
  <div className="slide" id="Category3_Slide1">
    <div className="sectionBody">
      <Title variant3>
        Приложение 3
      </Title>

      <Table
        data={DataCategory3_slide_2}
        cells={[
          'id',
          'name',
          'ppt',
          'pir',
          'price',
        ]}
      />
    </div>

    <a className="fp-controlArrow fp-back" href="#Category3">
      <Icon type="rollback" theme="outlined" />
    </a>
  </div>
);

export default Slide1_1;
