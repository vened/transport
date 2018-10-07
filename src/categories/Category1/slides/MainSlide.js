import React from 'react';

const MainSlide = () => (
  <div className="slide active" id="Category1_MainSlide">
    <div className="sectionBody">
      <div className="title">
        <b className="title_count">
          1
        </b>
        <h4 className="title_title">
          Неотложные меры по строительству и реконструкции региональных автомобильных дорог и транспортных сооружений
        </h4>
      </div>
      <p>
        Произведена проработка транспортной стратегии Московской области
        <br />
        на <b className="color1"> 5 лет (2018 – 2013 г.г.)</b>
      </p>
      <p>
        Текущие реализуемые объекты транспортной инфраструктуры в рамках госпрограммы «Дороги
        Подмосковья» первоочередные объекты МО:
      </p>
      <ul style={{margin: '1.5em 0 1.5em 0.5em'}}>
        <li  style={{margin: '0.6em 0'}}>
          <b className="color1">23 объекта </b>
          на сумму
          <b className="color1"> 63,98 млрд.руб. </b>
          строительство
          <a href="/#Page3/1"> подробнее</a>
        </li>
        <li  style={{margin: '0.6em 0'}}>
          <b className="color1">39 объектов </b>
          на сумму
          <b className="color1"> 81,03 млрд. руб. </b>
          проектирование
          <a href="/#Page3/4"> подробнее</a>
        </li>
      </ul>
      <p>
        <b>
          <span className="color1">ИТОГО 63 объекта </span>
          на сумму
          <span className="color1"> 145 млрд. руб.</span>
        </b>
      </p>
    </div>
  </div>
);

export default MainSlide;
