import React from 'react';
import './Page2.css';
import Title from '../../components/Title/Title';

const Page2 = () => (
  <section className="section text-center">
    <div className="sectionBody">
        <Title variant5>
          Основные мероприятия по реализации транспортной стратегии
        </Title>

        <div className="Page2List">
          <div className="Page2ListItem">
            <div className="Page2ListItemLeft">1</div>
            <div className="Page2ListItemRight">
              <a href="#Category1">
                Неотложные меры по строительству и реконструкции региональных автомобильных дорог и
                транспортных сооружений
              </a>
            </div>
          </div>
          <div className="Page2ListItem">
            <div className="Page2ListItemLeft">2</div>
            <div className="Page2ListItemRight">
              <a href="#Category2">
                Строительство дорог к точкам роста экономики
              </a>
            </div>
          </div>
          <div className="Page2ListItem">
            <div className="Page2ListItemLeft">3</div>
            <div className="Page2ListItemRight">
              <a href="#Category3">
                Развитие основных магистралей: вылетных и хордовых направлений
                (Федеральных и региональных)
              </a>
            </div>
          </div>
          <div className="Page2ListItem">
            <div className="Page2ListItemLeft">4</div>
            <div className="Page2ListItemRight">
              <a href="#Category4">
                Строительство путепроводов и ТПУ на магистральных ж/д. путях, в т. ч. на МЦД
              </a>
            </div>
          </div>
          <div className="Page2ListItem">
            <div className="Page2ListItemLeft">5</div>
            <div className="Page2ListItemRight">
              <a href="#Category5">
                Развитие транспортной инфраструктуры вблизи крупных жилых застроек/районов
              </a>
            </div>
          </div>
          <div className="Page2ListItem">
            <div className="Page2ListItemLeft">6</div>
            <div className="Page2ListItemRight">
              <a href="#Category6">
                Реконструкция объектов транспортной инфраструктуры на территории г. Москвы и МО (развязки
                МКАД), установление красных линий ЛРТ в точках состыковки с будущими линиями Московского
                метрополитена
              </a>
            </div>
          </div>
          <div className="Page2ListItem">
            <div className="Page2ListItemLeft">7</div>
            <div className="Page2ListItemRight">
              <a href="#Category7">
                Утверждение красных линий планируемых транспортных инфраструктур (региональных
                транспортных коридоров, автомобильных дорог I – III категории, ЛРТ)
              </a>
            </div>
          </div>
        </div>
    </div>
  </section>
);

export default Page2;
