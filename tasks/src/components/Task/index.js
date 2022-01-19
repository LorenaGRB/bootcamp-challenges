import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Task({ id ,title ,handleDelete ,handleEdit }) {
  const [isCompleted, setisCompleted] = useState(false);
  const handleCompleted = () => {
    setisCompleted((prevState)=>{
      return !prevState
    })
  }
  const handleED = () => {
    if(isCompleted){
      handleDelete(id)
    }else handleEdit(id)
  }
  const bCompleted = isCompleted? 'Marcar incompleta' : 'Marcar completa';
  const bEdit = isCompleted? 'Eliminar' : 'Editar';
  const color = isCompleted? 'error' : 'secondary';
  return (
    <Card id={ id } sx={{ width: 290 }}>
      <CardContent>
        <Typography color="text.principal" variant="h5">
          { title }
        </Typography>
        <Typography color="text.secondary">
          Tarea incompleta
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={ handleCompleted }>
          { bCompleted }
        </Button>
        <Button size="small" variant="contained" color={color} onClick={ handleED }>
          { bEdit }
        </Button>
      </CardActions>
    </Card>
    
  );
}