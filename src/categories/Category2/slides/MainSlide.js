import React from 'react';
import Title from '../../../components/Title/Title';
import Table from '../../../components/Table/Table';
import { DataCategory2 } from '../../../stubs/DataCategory2';

import img from '../assets/slide44.jpg';

const MainSlide = () => (
  <div className="slide active" id="Category2_MainSlide">
    <div className="sectionBody">
      <div className="slideGrid">
        <div className="slideGridSidebar">
          <Title count={2} variant2 className="Category2Title">
            Строительство дорог к точкам роста экономики
          </Title>

          <Table
            data={DataCategory2}
            cells={[
              'id',
              'text',
              'price',
            ]}
          />
        </div>
        <div className="slideGridMap slideGridMap_Category1_Slide2_1">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default MainSlide;
