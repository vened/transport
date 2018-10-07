import React from 'react';
import { DataCategory2 } from '../../../stubs/DataCategory2';

import img from '../assets/slide44.jpg';

const MainSlide = () => (
  <div className="slide active" id="Category2_MainSlide">
    <div className="sectionBody">
      <div className="slideGrid">
        <div className="slideGridSidebar">
          <div className="title">
            <b className="title_count">
              2
            </b>
            <h4>
              Строительство дорог к точкам роста экономики
            </h4>
          </div>

          <table className="table-1">
            <thead>
            {DataCategory2.map((item) => {
              if (item.head) {
                return (
                  <tr>
                    <th>{item.id}</th>
                    <th>{item.text}</th>
                    <th>{item.price}</th>
                  </tr>
                );
              }
            })}
            </thead>
            <tbody>
            {DataCategory2.map((item) => {
              if (item.rowTitle) {
                return (
                  <tr className="table-1_rowTitle">
                    <td></td>
                    <td>
                      {item.text}
                    </td>
                    <td></td>
                  </tr>
                );
              }
              if (item.itog) {
                return (
                  <tr className="table-1_itog">
                    <td colSpan={2}>
                      {item.text}
                    </td>
                    <td>
                      {item.price}
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
                </tr>
              );
            })
            }
            </tbody>
          </table>
        </div>

        <div className="slideGridMap slideGridMap_Category1_Slide2_1">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default MainSlide;
