import React, { PureComponent } from 'react';
import {
  Popover,
  Icon,
} from 'antd';
import Title from '../../../components/Title/Title';
import img from '../assets/slideGridMap_Category1_Slide1_1.jpg';
import { DataCategory1_Slide1 } from '../../../stubs/DataCategory1';

const initialState = DataCategory1_Slide1.map((item) => {
  return {
    id: item.id,
    text: item.text,
    price2: item.price2,
    top: item.top,
    left: item.left,
    height: item.height,
    width: item.width,
    show: false,
  };
});


class Slide1_1 extends PureComponent {
  state = {
    popovers: initialState,
  };

  hide = (currentItem) => {
    const popovers = DataCategory1_Slide1.map((item) => {
      return {
        ...item,
        show: false,
      };
    });
    this.setState({ popovers });
  };

  handleVisibleChange = (visible, currentItem) => {
    const popovers = DataCategory1_Slide1.map((item) => {
      if (currentItem.id === item.id) {
        return {
          ...item,
          show: visible,
        };
      }
      return {
        ...item,
        show: false,
      };
    });
    this.setState({ popovers });
  };

  render() {
    return (
      <div className="slide active" id="Category1_Slide2_1">
        <div className="sectionBody">
          <div className="slideGrid">
            <div className="slideGridSidebar">
              <Title variant4>
                Приложение 1
              </Title>
              <div className="slideGridSidebar_text slideGridSidebar_text_blue_bg">
                Неотложные меры по строительству и реконструкции региональных автомобильных дорог и транспортных сооружений
              </div>
              <div className="slideGridSidebar_text">
                Строящиеся объекты
              </div>
              <div className="slideGridSidebar_text">
                <a href="#Category1/2">
                  Подробная таблица
                </a>
              </div>
            </div>
            <div className="slideGridMap slideGridMap_Category1_Slide2_1">
              <img src={img} alt="" />

              {this.state.popovers.map((item) => {
                if (!item.id) {
                  return null;
                }
                return (
                  <Popover
                    key={item.id}
                    content={
                      <div className="tooltipContent">
                        <p><b>{item.id}.</b> {item.text}</p>
                        <p className="color1">
                          Стоимость: <b>{item.price2} млрд. руб.</b>
                        </p>
                        <a className="tooltipClose" onClick={() => this.hide(item)}>
                          <Icon type="close-circle" theme="outlined" style={{ fontSize: '24px' }} />
                        </a>
                      </div>
                    }
                    placement="left"
                    trigger="click"
                    visible={item.show}
                    onVisibleChange={(visible) => this.handleVisibleChange(visible, item)}
                  >
                    <div className="tooltipPoint" style={{
                      height: item.height,
                      width: item.width,
                      top: item.top,
                      left: item.left,
                    }}></div>
                  </Popover>
                );
              })}
            </div>
          </div>
        </div>

        <a className="fp-controlArrow fp-back" href="#Category1">
          <Icon type="rollback" theme="outlined" />
        </a>
      </div>
    );
  }
}

export default Slide1_1;
