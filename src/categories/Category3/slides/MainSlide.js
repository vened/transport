import { Icon } from 'antd';
import React from 'react';
import Title from '../../../components/Title/Title';
import Table from '../../../components/Table/Table';
import { DataCategory3 } from '../../../stubs/DataCategory3';

import img from '../assets/category3.jpg';

const MainSlide = () => (
  <div className="slide active" id="Category3_MainSlide">
    <div className="sectionBody">
      <div className="slideGrid">
        <div className="slideGridSidebar">
          <Title count={3} variant6 className="Category3SidebatTitle">
            Развитие основных магистралей: вылетных и хордовых направлений
            (Федеральных и региональных)
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
    <a className="fp-controlArrow fp-back" href="#Page2">
      <Icon type="rollback" theme="outlined" />
    </a>
  </div>
);

export default MainSlide;
