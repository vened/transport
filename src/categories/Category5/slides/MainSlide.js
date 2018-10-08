import { Icon } from 'antd';
import React from 'react';
import Title from '../../../components/Title/Title';
import Table from '../../../components/Table/Table';
import { DataCategory5 } from '../../../stubs/DataCategory5';

const MainSlide = () => (
  <div className="slide active" id="Category5_MainSlide">
    <div className="sectionBody">
      <Title count={5} className="Category5Title">
        Развитие транспортной инфраструктуры вблизи крупных жилых застроек / районов
      </Title>
      <div className="categoryBody">
        <Table
          data={DataCategory5}
          cells={[
            'id',
            'area',
            'buildingArea',
            'populationSize',
            'jobSize',
          ]}
        />
        <div className="slideGridSidebar_more">
          <a href="#Category5/1">
            Подробная таблица
          </a>
        </div>
      </div>
    </div>

    <a className="fp-controlArrow fp-back" href="#Page2">
      <Icon type="rollback" theme="outlined" />
    </a>
  </div>
);

export default MainSlide;
