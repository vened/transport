import React from 'react';
import { DataCategory1_Slide1 } from '../../../stubs/DataCategory1';

const Slide1_2 = () => (
  <div className="slide active" id="Category1_Slide1_2">
    <div className="sectionBody">
      <div className="sectionTitle">
        <h3>
          Приложение 1
        </h3>
      </div>
      <table className="table-1">
        <thead>
        <tr>
          <th></th>
          <th>
            Строящиеся объекты
          </th>
          <th>
            Стоимость (млрд. руб.)
          </th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {DataCategory1_Slide1.map((item) => {
          if (item.project) {
            return (
              <tr className="table-1_footer_lite">
                <td colSpan="2">
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
          }
          if (item.itog) {
            return (
              <tr className="table-1_footer">
                <td colSpan="2">
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
          }
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

export default Slide1_2;
