import React, { useState } from 'react';
import '../src/Sass/index.scss';
import Table from './components/Table';

function App() {
  const [color, setColor] = useState('black');
  function fillArray(amount) {
    let array = [];
    for (let i = 0; i < amount; i++) array.push([]);
    return array;
  }
  function selectColor(indexRow, indexCol) {
    console.log('"(indexRow,IndexCol)"', indexRow, indexCol);
    switch (indexCol) {
      case 0:
        setColor('yellow');
        break;
      case 1:
        setColor('green');
        break;
      case 2:
        setColor('blue');
        break;
      case 3:
        setColor('red');
        break;
      default:
        setColor('black');
        break;
    }
  }
  const colorsRow = fillArray(1);
  const colorsCol = fillArray(4);
  const columns = fillArray(4);
  const rows = fillArray(4);
  return (
    <div className="App">
      <div className="board">
        <Table rows={rows} columns={columns} type={'board'} background={color} />
      </div>
      <div className="selector">
        <Table rows={colorsRow} columns={colorsCol} type={'selector'} selectColor={selectColor} />
      </div>
    </div>
  );
}

export default App;
