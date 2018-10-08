import React from 'react';
import Title from '../../../components/Title/Title';
import Table from '../../../components/Table/Table';
import { DataCategory3 } from '../../../stubs/DataCategory3';

import img from '../assets/page_6_people.jpg';

const Category4Slide1_1 = () => (
  <div className="slide active" id="Category3_MainSlide">
    <div className="sectionBody">
      <div className="slideGrid">
        <div className="slideGridSidebar">
          <Title count={3} className="Category3SidebatTitle">
            Строительство дорог к точкам роста экономики
          </Title>

          <div className="Category3SidebatText">
            Полная или частичная реконструкция с «расшивкой» проблемных участков. Хорды могут быть платные – через концессию или бесплатные
            – для миграции трудовых ресурсов; наиболее эффективно - совместить с дорогами для точек роста.
          </div>

          <Table
            data={DataCategory3}
            cells={[
              'text',
              'price',
            ]}
          />

          <div className="slideGridSidebar_text">
            <a href="#Category3/1">
              Подробная таблица
            </a>
          </div>

        </div>
        <div className="slideGridMap slideGridMap_Category1_Slide2_1">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default Category4Slide1_1;
