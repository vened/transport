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

const Row = ({ classNames, rowData, cells, collspan, itogCollspan, onClickRow }) => {
  const className = cn(
    classNames,
    { onClickRow: onClickRow },
  );

  if (collspan) {
    return (
      <tr className={classNames}>
        <td colSpan={collspan}>
          {rowData.text}
        </td>
      </tr>
    );
  }
  if (itogCollspan) {
    return (
      <tr className={classNames}>
        <td></td>
        <td>
          {rowData.text}
        </td>
        <td colSpan={itogCollspan}>
          {rowData.price.value}
        </td>
      </tr>
    );
  }
  return (
    <tr className={className} onClick={() => onClickRow(rowData)}>
      {cells.map((cell) => {
        return (
          <td colSpan={collspan}>
            <span dangerouslySetInnerHTML={{ __html: rowData[cell] }} />
          </td>
        );
      })}
    </tr>
  );
};

const RenderRow = ({ classNames, rowData, cells, onClickRow }) => {
  if (rowData.head) {
    return <TableHead rowData={rowData} cells={cells} />;
  }
  if (rowData.isTitle) {
    return <Row rowData={rowData} cells={cells} classNames="TableRowTitle2" collspan={rowData.collspan} />;
  }
  if (rowData.isTitle2) {
    return <Row rowData={rowData} cells={cells} classNames="TableRowIsTitle2" collspan={rowData.collspan} />;
  }
  if (rowData.rowTitle) {
    return <Row rowData={rowData} cells={cells} classNames="TableRowTitle" />;
  }
  if (rowData.project) {
    return <Row rowData={rowData} cells={cells} classNames="TableItogProject" />;
  }
  if (rowData.itog) {
    return <Row rowData={rowData} cells={cells} classNames="TableItog" itogCollspan={rowData.price && rowData.price.collspan} />;
  }
  return <Row rowData={rowData} cells={cells} onClickRow={onClickRow} />;
};

const Table = ({ data, cells, className, onClickRow }) => {
  const classNames = cn(
    'Table',
    className,
  );
  return (
    <table className={classNames}>
      {data.map((item) => {
        return (
          <RenderRow rowData={item} cells={cells} onClickRow={onClickRow} />
        );
      })}
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.object.isRequired,
  cells: PropTypes.array.isRequired,
  onClickRow: PropTypes.func,
};

export default Table;
