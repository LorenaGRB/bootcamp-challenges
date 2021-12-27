/* eslint-disable prettier/prettier *//* eslint-disable react/prop-types */

import React from 'react';
import Cell from './Cell';
function Row({ columns, indexRow, type, selectColor,background }) {
  return (
    <tr key={indexRow} className={`row row__${indexRow}`}>
      {
        columns.map((item, indexCol) => {
          return <Cell key={`${indexRow}-${indexCol}`} indexCol={indexCol} indexRow={indexRow} type={type} selectColor={selectColor} background={background} />;
        })
      }
    </tr>
  );
}

export default Row;
