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
import { getArrayFromArray } from '../../../helpers/getArrayFromArray';
import img from '../assets/MainSlide_2.jpg';

const data = getArrayFromArray(DataCategory2, 13, 40);

const initialState = data.map((item) => {
  return {
    ...item,
    show: false,
    modalShow: false,
    modalShow2: false,
  };
});

class MainSlide extends PureComponent {
  state = {
    popovers: initialState,
  };

  toggleModalShow2 = (currentItem) => {
    const popovers = this.state.popovers.map((item) => {
      if (currentItem.id === item.id) {
        return {
          ...item,
          modalShow2: !item.modalShow2,
        };
      }
      return {
        ...item,
        modalShow2: false,
      };
    });
    this.setState({ popovers });
  };

  toggleModalShow = (visible, currentItem) => {
    const popovers = this.state.popovers.map((item) => {
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

  hideModal = () => {
    const popovers = this.state.popovers.map((item) => {
      return {
        ...item,
        modalShow: false,
        modalShow2: false,
      };
    });
    this.setState({ popovers });
  };

  hide = (currentItem) => {
    const popovers = this.state.popovers.map((item) => {
      return {
        ...item,
        show: false,
      };
    });
    this.setState({ popovers });
  };

  handleVisibleChange = (visible, currentItem) => {
    const popovers = this.state.popovers.map((item) => {
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
      <div className="slide active Category2_MainSlide" id="Category2_MainSlide_2">
        <div className="sectionBody">
          <Title count={2} variant6 className="Category2Title">
            Строительство дорог к точкам роста экономики
          </Title>
          <div className="categoryBody">
            <div className="slideGrid">
              <div className="slideGridSidebar">
                <Table
                  data={data}
                  onClickRow={(item) => this.toggleModalShow2(item)}
                  cells={[
                    'id',
                    'text',
                    'price',
                  ]}
                />

                <div className="slideGridSidebar_more">
                  <a href="#Category2/2">
                    Подробная таблица
                  </a>
                </div>

                {this.state.popovers.map((item) => {
                  if (item.id && item.id !== '№') {
                    return (
                      <Modal
                        key={`item.text${item.id}`}
                        centered
                        width={1280}
                        zIndex={2000}
                        visible={item.modalShow2}
                        footer={null}
                        destroyOnClose={false}
                        onCancel={() => this.hideModal()}
                      >
                        <img src={require(`../../../img/category/2/mainSlide/${item.id}.JPG`)} alt="" style={{ width: '100%' }} />
                      </Modal>
                    );
                  }
                })}

                {this.state.popovers.map((item) => {
                  if (item.id && item.id !== 10 && item.id !== '№') {
                    return (
                      <Modal
                        key={item.text}
                        centered
                        width={1280}
                        zIndex={2000}
                        visible={item.modalShow}
                        footer={null}
                        destroyOnClose={false}
                        onCancel={() => this.hideModal()}
                      >
                        {item.id !== 18 &&
                         <img src={require(`../../../img/category/2/${item.id}.jpg`)} alt="" style={{ width: '100%' }} />
                        }
                        {item.id === 18 &&
                         <img src={require(`../../../img/category/2/${item.id}.png`)} alt="" style={{ width: '100%' }} />
                        }
                      </Modal>
                    );
                  }
                })}

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
                          <p><b>{item.id}.</b> <span dangerouslySetInnerHTML={{ __html: item.text }} /></p>
                          {item.price !== '—' &&
                           <p className="color1">
                             Стоимость: <b>{item.price} млрд. руб.</b>
                           </p>
                          }
                          {item.id !== 10 &&
                           <p>
                             <Button type="primary" onClick={() => this.toggleModalShow(true, item)}>Подробнее</Button>
                           </p>
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
        </div>

        <a className="fp-controlArrow fp-back" href="#Page2">
          <Icon type="rollback" theme="outlined" />
        </a>
      </div>
    );
  }
}

export default MainSlide;
