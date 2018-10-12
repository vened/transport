import React, { PureComponent } from 'react';
import {
  Icon,
  Modal,
} from 'antd';
import Title from '../../../components/Title/Title';
import Table from '../../../components/Table/Table';
import { DataCategory5 } from '../../../stubs/DataCategory5';

const initialState = DataCategory5.map((item) => {
  return {
    id: item.id,
    modalShow: false,
  };
});

class MainSlide extends PureComponent {
  state = {
    popovers: initialState,
  };

  toggleModalShow = (currentItem) => {
    const popovers = this.state.popovers.map((item) => {
      if (currentItem.id === item.id) {
        return {
          ...item,
          modalShow: !item.modalShow,
        };
      }
      return {
        ...item,
        modalShow: false,
      };
    });
    this.setState({ popovers });
  };

  toggleModalClose = () => {
    const popovers = this.state.popovers.map((item) => {
      return {
        ...item,
        modalShow: false,
      };
    });
    this.setState({ popovers });
  };

  render() {
    return (
      <div className="slide active" id="Category5_MainSlide">
        <div className="sectionBody">
          <Title count={5} className="Category5Title">
            Развитие транспортной инфраструктуры вблизи крупных жилых застроек / районов
          </Title>
          <div className="categoryBody">
            <Table
              className="Table2"
              data={DataCategory5}
              onClickRow={(item) => this.toggleModalShow(item)}
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

            {this.state.popovers.map((item) => {
              if (item.id && item.id !== '4' && item.id !== '№' ) {
                return (
                  <Modal
                    centered
                    width={1280}
                    zIndex={2000}
                    visible={item.modalShow}
                    okText="Закрыть"
                    footer={null}
                    destroyOnClose={false}
                    onCancel={() => this.toggleModalClose()}
                  >
                    <img src={require(`../../../img/category/5/${item.id}.jpg`)} alt="" style={{ width: '100%' }} />
                  </Modal>
                );
              }
            })}
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
