import { Icon } from 'antd';
import React from 'react';
import Table from '../../components/Table/Table';
import Title from '../../components/Title/Title';
import { PageData3 } from '../../stubs/Page3';

const Page3 = () => (
  <section className="section text-center">
    <div className="sectionBody">
      <Title className="Category5Title">
        Выводы.
        <br />
        Стоимостные показатели по реализации стратегии
      </Title>

      <Table
        className="Table2"
        data={PageData3}
        cells={[
          'id',
          'title',
          'price',
        ]}
      />
    </div>
    <a className="fp-controlArrow fp-back" href="#Page2">
      <Icon type="rollback" theme="outlined" />
    </a>
  </section>
);

export default Page3;
