import React, { PureComponent } from 'react';
import {
  Popover,
  Icon,
  Modal,
  Button,
} from 'antd';
import Title from '../../../components/Title/Title';
import Table from '../../../components/Table/Table';
import { DataCategory2 } from '../../../stubs/DataCategory2';

import img from '../assets/slide44.jpg';

const initialState = DataCategory2.map((item) => {
  return {
    id: item.id,
    text: item.text,
    price2: item.price2,
    top: item.top,
    left: item.left,
    height: item.height,
    width: item.width,
    show: false,
    modalShow: false,
  };
});

class MainSlide extends PureComponent {
  state = {
    popovers: initialState,
  };

  toggleModalShow = (visible, currentItem) => {
    const popovers = DataCategory2.map((item) => {
      if (currentItem.id === item.id) {
        return {
          ...item,
          modalShow: visible,
        };
      }
      return {
        ...item,
        modalShow: false,
      };
    });
    this.setState({ popovers });
  };

  hide = (currentItem) => {
    const popovers = DataCategory2.map((item) => {
      return {
        ...item,
        show: false,
      };
    });
    this.setState({ popovers });
  };

  handleVisibleChange = (visible, currentItem) => {
    const popovers = DataCategory2.map((item) => {
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
      <div className="slide active" id="Category2_MainSlide">
        <div className="sectionBody">
          <div className="slideGrid">

            <div className="slideGridSidebar">
              <Title count={2} variant6 className="Category2Title">
                Строительство дорог к точкам роста экономики
              </Title>

              <Table
                className="Table3"
                data={DataCategory2}
                cells={[
                  'id',
                  'text',
                  'price',
                ]}
              />

              <div className="slideGridSidebar_more">
                <a href="#Category2/1">
                  Подробная таблица
                </a>
              </div>

            </div>

            <div className="slideGridMap Category2_MainSlide">
              <img src={img} alt="" />

              {this.state.popovers.map((item) => {
                if (!item.id) {
                  return null;
                }
                return (
                  <Popover
                    key={item.id}
                    content={
                      <div className="tooltipContent" style={{ width: 320 }}>
                        <p><b>{item.id}.</b> {item.text}</p>
                        {item.price &&
                         <p className="color1">
                           Стоимость: <b>{item.price} млрд. руб.</b>
                         </p>
                        }
                        {item.id !== 10 &&
                         <p>
                           <Button type="primary" onClick={() => this.toggleModalShow(true, item)}>Подробнее</Button>
                         </p>
                        }
                        {item.id !== 10 &&
                         <Modal
                           centered
                           width={1280}
                           zIndex={2000}
                           visible={item.modalShow}
                           okText="Закрыть"
                           footer={null}
                           destroyOnClose={false}
                           onOk={() => this.toggleModalShow(false, item)}
                         >
                           {item.id !== 18 &&
                            <img src={require(`../../../img/category/2/${item.id}.jpg`)} alt="" style={{ width: '100%' }} />
                           }
                           {item.id === 18 &&
                            <img src={require(`../../../img/category/2/${item.id}.png`)} alt="" style={{ width: '100%' }} />
                           }
                         </Modal>
                        }
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

        <a className="fp-controlArrow fp-back" href="#Page2">
          <Icon type="rollback" theme="outlined" />
        </a>
      </div>
    );
  }
}

export default MainSlide;
