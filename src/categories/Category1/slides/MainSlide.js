import React from 'react';
import Title from '../../../components/Title/Title';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';

const MainSlide = () => (
  <div className="slide active" id="Category1_MainSlide">
    <div className="sectionBody">
      <Title count={1}>
        Неотложные меры по строительству и реконструкции региональных автомобильных дорог и транспортных сооружений
      </Title>
      <div className="categoryBody">
        <p>
          Произведена проработка транспортной стратегии Московской области
          <br />
          на <b className="color1"> 5 лет (2018 – 2013 г.г.)</b>
        </p>
        <p>
          Текущие реализуемые объекты транспортной инфраструктуры в рамках госпрограммы «Дороги
          Подмосковья» первоочередные объекты МО:
        </p>

        <div className="Category1InfoContainer">
          <div className="Category1InfoContainer_Item">
            <img src={pic1} alt="" />
            <div>
              <div className="Category1InfoTitle">
                Cтроительство
              </div>
              <div>
                <b className="color1">23 объекта</b>
              </div>
              <div>
                <b className="color1">63,98 млрд.руб.</b>
              </div>
              <div className="Category1InfoMore">
                <a href="#Page3/1">подробнее</a>
              </div>
            </div>
          </div>
          <div className="Category1InfoContainer_Item">
            <img src={pic2} alt="" />
            <div>
              <div className="Category1InfoTitle">
                Проектирование
              </div>
              <div>
                <b className="color1">39 объектов </b>
              </div>
              <div>
                <b className="color1">81,03 млрд. руб. </b>
              </div>
              <div className="Category1InfoMore">
                <a href="#Page3/3"> подробнее</a>
              </div>
            </div>
          </div>
        </div>
        <p>
          <b>
            ВСЕГО
            <span className="color1"> 63 объекта </span>
            на сумму
            <span className="color1"> 145 млрд. руб.</span>
          </b>
        </p>
      </div>
    </div>
  </div>
);

export default MainSlide;
