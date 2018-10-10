import { Icon } from 'antd';
import React from 'react';
import Title from '../../../components/Title/Title';
import Table from '../../../components/Table/Table';
import DataCategory1_2 from '../../../stubs/DataCategory1_2';
import { getArrayFromArray } from '../../../helpers/getArrayFromArray';
const data = getArrayFromArray(DataCategory1_2, 29, 37);

const Slide2_4 = () => (
  <div className="slide active" id="Category1_Slide2_4">
    <div className="sectionBody">
      <Title variant3>
        Приложение 1
      </Title>

      <Table
        className="Table2 TableCategory1Slide_1"
        data={data}
        cells={[
          'id',
          'text',
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
