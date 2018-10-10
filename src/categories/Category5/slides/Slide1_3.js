import { Icon } from 'antd';
import React from 'react';
import Title from '../../../components/Title/Title';
import Table from '../../../components/Table/Table';
import { DataCategory5_slide_1 } from '../../../stubs/DataCategory5_slide_1';
import { getArrayFromArray } from '../../../helpers/getArrayFromArray';

const data = getArrayFromArray(DataCategory5_slide_1, 36, 45);


const Slide1_1 = () => (
  <div className="slide" id="Category5_Slide1">
    <div className="sectionBody">
      <Title variant3>
        Приложение 4
      </Title>

      <Table
        className="Table2"
        data={data}
        cells={[
          'id',
          'name',
          'activity',
          'category',
        ]}
      />
    </div>
    <a className="fp-controlArrow fp-back" href="#Category5">
      <Icon type="rollback" theme="outlined" />
    </a>
  </div>
);

export default Slide1_1;
