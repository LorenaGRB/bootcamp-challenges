/* eslint-disable prettier/prettier *//* eslint-disable react/prop-types */

import React from 'react';
import Row from './Row';
function Table({ rows,columns,type,selectColor,background}) {
  return (
    <table>
      <tbody>
        {rows.map((item, indexRow) => {
          return <Row key={indexRow} columns={columns} indexRow={indexRow} type={type} selectColor={selectColor} background={background} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;