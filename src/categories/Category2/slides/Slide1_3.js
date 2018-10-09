import React from 'react';
import { Icon } from 'antd';
import Title from '../../../components/Title/Title';
import Table from '../../../components/Table/Table';
import { DataCategory2_slide_3 } from '../../../stubs/DataCategory2_slide_3';
import { getArrayFromArrayNoHead } from '../../../helpers/getArrayFromArray';

const data = getArrayFromArrayNoHead(DataCategory2_slide_3, 0, 17);

const Slide1_1 = () => (
  <div className="slide" id="Category3_Slide1_3">
    <div className="sectionBody">
      <Title variant3>
        Перечень автомобильных дорог к точкам роста
      </Title>

      <Table
        className="Table2"
        data={data}
        cells={[
          'id',
          'text',
          'date',
          'pir',
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
