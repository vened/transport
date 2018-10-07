import React from 'react';
import { DataCategory1_Slide2_2 } from '../../../stubs/DataCategory1';

const Slide2_2 = () => (
  <div className="slide active" id="Category1_Slide2_2">
    <div className="sectionBody">
      <div className="sectionTitle">
        <h3>
          Приложение 1
        </h3>
      </div>
      <table className="table-1" style={{fontSize: '0.9em'}}>
        <thead>
        <tr>
          <th></th>
          <th>
            Проектируемые объекты
          </th>
          <th>
            Стоимость (млрд. руб.)
          </th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {DataCategory1_Slide2_2.map((item) => {
          return (
            <tr>
              <td>
                {item.id}
              </td>
              <td>
                {item.text}
              </td>
              <td>
                {item.price}
              </td>
              <td>
                {item.price2}
              </td>
            </tr>
          );
        })
        }
        </tbody>
      </table>
    </div>
  </div>
);

export default Slide2_2;
