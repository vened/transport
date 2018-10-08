import PropTypes from 'prop-types';
import React from 'react';
import './Table.css';

const TableHead = ({ rowData, cells }) => {
  return (
    <thead>
    <tr>
      {cells.map((cell) => {
        return (
          <th>
            <span dangerouslySetInnerHTML={{__html: rowData[cell]}} />
          </th>
        );
      })}
    </tr>
    </thead>
  );
};

const Row = ({ classNames, rowData, cells }) => {
  return (
    <tr className={classNames}>
      {cells.map((cell) => {
        return (
          <td>
            {rowData[cell]}
          </td>
        );
      })}
    </tr>
  );
};

const RenderRow = ({ classNames, rowData, cells }) => {
  if (rowData.head) {
    return <TableHead rowData={rowData} cells={cells} />;
  }
  if (rowData.rowTitle) {
    return <Row rowData={rowData} cells={cells} classNames="TableRowTitle" />;
  }
  if (rowData.project) {
    return <Row rowData={rowData} cells={cells} classNames="TableItogProject" />;
  }
  if (rowData.itog) {
    return <Row rowData={rowData} cells={cells} classNames="TableItog" />;
  }
  return <Row rowData={rowData} cells={cells} />;
};

const Table = ({ data, cells }) => {
  console.log(cells);
  return (
    <table className="Table">
      {data.map((item) => {
        return (
          <RenderRow rowData={item} cells={cells} />
        );
      })}
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.object.isRequired,
  cells: PropTypes.array.isRequired,
};

export default Table;
