/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
export default function cell({ indexRow, indexCol, type , selectColor, background}) {
  const [color, setColor] = useState('black')
  const colorChoosed = background;
  const idRow = `${type}-${indexRow}${indexCol}`
  function handleClick(e) {
    if(type==='selector'){
      selectColor(indexRow,indexCol);
    }
    if((type==='board') && (idRow===e.target.id)){
      console.log(e.target.getAttribute("style"))
      if(e.target.getAttribute("style") != 'background-color: black;'){
        setColor('black')
      }else{
        setColor(colorChoosed);
      }
    }
  }
  return (
    <td>
      <button id={idRow} onClick={handleClick} className={`col col__${type}-${indexRow}${indexCol}`}style={{backgroundColor:`${color}`}} ></button>
    </td>
  );
}
