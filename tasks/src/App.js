import './styles/main.scss';
import { useState, useEffect } from 'react';
import Title from './components/Title'
import InputTask from './components/InputTask'
import Task from './components/Task';
import { INITIAL_TASKS } from './utils/constant';

function App() {
  const [task, setTask] = useState('');
  const [taskShowed, setTaskShowed] = useState(INITIAL_TASKS);
  const [taskEdited, setTaskEdited] = useState({})

  useEffect(() => {
    setTaskShowed(INITIAL_TASKS);
  }, [])
  
  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleTask = () => {
    if(taskEdited.isEdit){
      let taskList=[]
      taskShowed.forEach((item,index) => {
        if(taskEdited.id === item.id){
          taskList.push({
            task : task,
            id : task
          });
        }else taskList.push(item)
      })
      setTaskShowed(taskList);
      setTask('');
      setTaskEdited({
        id:null,
        isEdit:false
      });
    }else{
      setTaskShowed((prevState) => {
        return [...prevState,{
          task : task,
          id : task
        }]
      });
      setTask('');
    }
  };

  const handleDelete = (key) => {
    let taskList=[]
    taskShowed.forEach((item,index) => {
      if(key !== item.id){
        taskList.push(item);
      }
    })
    setTaskShowed(taskList);
  };

  const handleEdit = (key) => {
    setTask(key)
    setTaskEdited({
      id:key,
      isEdit:true
    })
  };


  return (
    <div className="App">
      <Title title={ 'Lista de tareas' }/>
      <InputTask 
      handleChange={ handleChange } 
      inputValue={ task } 
      handleTask={ handleTask }
      />
      <div className="task__container">
        {taskShowed.map((item,key) => {
          return (
          <Task
          key= { item.id+key } 
          id= { item.id } 
          title= { item.task } 
          handleDelete= { handleDelete } 
          handleEdit= { handleEdit } 
          />)
        })}
      </div>
    </div>
  );
}

export default App;
