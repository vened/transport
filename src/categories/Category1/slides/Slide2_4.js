import { Icon } from 'antd';
import React from 'react';
import Title from '../../../components/Title/Title';
import Table from '../../../components/Table/Table';
import { DataCategory1_slide_2_4 } from '../../../stubs/DataCategory1_slide_2_4';

const Slide2_4 = () => (
  <div className="slide active" id="Category1_Slide2_4">
    <div className="sectionBody">
      <Title variant3>
        Приложение 1
      </Title>

      <Table
        className="Table2"
        data={DataCategory1_slide_2_4}
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

export default Slide2_4;
