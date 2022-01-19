import '../App.css';
import React, {useState} from 'react'

const emojiDictionary = {
  limon : '🍋',
  mango : '🥭',
  fresa : '🍓'
}

const transformTextToEmoji = (text) => {
  const newText = text.split(' ').map((word)=>{
    return emojiDictionary[word] ?? word;
  })
  return newText.join(' ');
}

const App = () => {
  const [color, setColor] = useState('black')
  const [text, setText] = useState('Nuevo texto');

  const textStyle = {
    color: color,
  }
  const onTextAreaChange = e => {
    setText(e.target.value)
  }
  return (
    <div className="App" >
      <textarea 
      value={text}
      cols="30" 
      rows="10" 
      onChange={onTextAreaChange}
      ></textarea>

      <input 
      type="text" 
      value={color} 
      onChange={ e => setColor(e.target.value)} 
      placeholder='porfavor ingrese el color para el texto'
      />

      <p style={textStyle}>{transformTextToEmoji(text)}</p>
    </div>
  );
}

export default App;
