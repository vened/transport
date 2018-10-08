import React from 'react';
import { Icon } from 'antd';
import Title from '../../../components/Title/Title';
import Table from '../../../components/Table/Table';
import { DataCategory3_slide_3 } from '../../../stubs/DataCategory3_slide_3';

const Slide1_3 = () => (
  <div className="slide" id="Category3_Slide1">
    <div className="sectionBody">
      <Title variant3>
        Основные магистрали. Региональные хорды
      </Title>

      <Table
        data={DataCategory3_slide_3}
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

export default Slide1_3;
