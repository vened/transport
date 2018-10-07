import React from 'react';
import img from '../assets/slideGridMap_Category1_Slide1_1.jpg';

const Slide1_1 = () => (
  <div className="slide active" id="Category1_Slide1_1">
    <div className="sectionBody">
      <div className="slideGrid">
        <div className="slideGridSidebar">
          <div className="sectionTitle">
            <h3>
              Приложение 1
            </h3>
          </div>
          <div className="slideGridSidebar_text slideGridSidebar_text_blue_bg">
            Неотложные меры по строительству и реконструкции региональных автомобильных дорог и транспортных сооружений
          </div>
          <div className="slideGridSidebar_text">
            Строящиеся объекты
          </div>
          <div className="slideGridSidebar_text">
            <a href="#Page3/2">
              Подробная таблица
            </a>
          </div>
        </div>
        <div className="slideGridMap slideGridMap_Category1_Slide1_1">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default Slide1_1;
