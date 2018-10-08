import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import './Table.css';

const TableHead = ({ rowData, cells }) => {
  return (
    <thead>
    <tr>
      {cells.map((cell) => {
        return (
          <th>
            <span dangerouslySetInnerHTML={{ __html: rowData[cell] }} />
          </th>
        );
      })}
    </tr>
    </thead>
  );
};

const Row = ({ classNames, rowData, cells, collspan }) => {
  if (collspan) {
    return (
      <tr className={classNames}>
        <td colSpan={collspan}>
          {rowData.text}
        </td>
      </tr>
    );
  }
  return (
    <tr className={classNames}>
      {cells.map((cell) => {
        return (
          <td colSpan={collspan}>
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
  if (rowData.isTitle) {
    return <Row rowData={rowData} cells={cells} classNames="TableRowTitle2" collspan={rowData.collspan} />;
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

const Table = ({ data, cells, className }) => {
  const classNames = cn(
    'Table',
    className,
  );
  return (
    <table className={classNames}>
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
