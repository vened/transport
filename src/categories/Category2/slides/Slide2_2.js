import React from 'react';
import Title from '../../../components/Title/Title';
import Table from '../../../components/Table/Table';
import { DataCategory1_Slide2 } from '../../../stubs/DataCategory1';

const Slide2_2 = () => (
  <div className="slide active" id="Category1_Slide2_2">
    <div className="sectionBody">
      <Title variant3>
        Приложение 1
      </Title>

      <Table
        data={DataCategory1_Slide2}
        cells={[
          'id',
          'text',
          'price',
          'price2',
        ]}
      />
    </div>
  </div>
);

export default Slide2_2;
