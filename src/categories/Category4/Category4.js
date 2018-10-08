import React from 'react';

import Title from '../../components/Title/Title';
import people from './assets/page_6_people.jpg';
import './Category4.css';

const Category4 = () => (
  <section className="section">
    <div className="sectionBody">
      <Title count={4}>
        Строительство путепроводов и ТПУ на магистральных ж/д. путях, в т. ч. на МЦД
      </Title>
      <div className="categoryBody">
        <div className="Category4Subtitle">
          Проект реализуется Правительством Москвы и Министерством транспорта РФ
        </div>
        <div className="Category4Body">
          <div className="Category4BodyLeft">
            <div className="Category4BodyLeftTitle">
              Стратегическая задача:
            </div>
            <p>
              Построить за счет Федерального бюджета ТПУ и путепроводов необходимо синхронизировать со строительством инфраструктуры с
              точками
              роста с целью исключения / «увода» трудовых ресурсов в виде жителей Московской области, который напрямую связан с проектом
              реализации МЦД.
            </p>
          </div>
          <div className="Category4BodyRigth">
            <img src={people} alt="" />
            <div>
              В случае синхронизации мы нивелируем возможные потери бюджета от миграции трудовых ресурсов и привлечем жителей Москвы для
              работы в область.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Category4;
