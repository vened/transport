import React from 'react';
import { Icon } from 'antd';
import Title from '../../../components/Title/Title';
import Table from '../../../components/Table/Table';
import { DataCategory2_slide_2 } from '../../../stubs/DataCategory2_slide_2';

const Slide1_1 = () => (
  <div className="slide" id="Category3_Slide1_2">
    <div className="sectionBody">
      <Title variant3>
        Перечень автомобильных дорог к точкам роста
      </Title>

      <Table
        data={DataCategory2_slide_2}
        cells={[
          'id',
          'text',
          'pir',
          'width',
          'cmr',
        ]}
      />
    </div>

    <a className="fp-controlArrow fp-back" href="#Category2">
      <Icon type="rollback" theme="outlined" />
    </a>
  </div>
);

export default Slide1_1;
