import React from 'react';
import { Icon } from 'antd';
import Title from '../../../components/Title/Title';
import Table from '../../../components/Table/Table';
import { DataCategory2_Slide_1 } from '../../../stubs/DataCategory2_slide_1';

const Slide1_1 = () => (
  <div className="slide" id="Category3_Slide1_1">
    <div className="sectionBody">
      <Title variant3>
        Приложение 2
      </Title>

      <Table
        data={DataCategory2_Slide_1}
        cells={[
          'id',
          'text',
          'price',
        ]}
      />
    </div>

    <a className="fp-controlArrow fp-back" href="#Category2">
      <Icon type="rollback" theme="outlined" />
    </a>
  </div>
);

export default Slide1_1;
