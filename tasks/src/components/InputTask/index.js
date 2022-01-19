import React from 'react'
import { TextField, Button } from '@mui/material';

function InputTask({ inputValue, handleChange, handleTask }) {
  return (
    <div className='inputTask'>
      <TextField 
      id = "outlined-basic" 
      label = "Ingresa tu tarea" 
      variant = "outlined" 
      value = { inputValue}
      onChange = { handleChange }
      />
      <Button 
      onClick={ handleTask }
      size="small" 
      variant='contained' 
      style={{padding:'1rem',borderRadius:'0rem 1rem 1rem 0rem'}}>
        +
      </Button>
      <p className='inputTask__label'> Escribe la tarea que deseas registrar</p>
    </div>
  )
}

export default InputTask
