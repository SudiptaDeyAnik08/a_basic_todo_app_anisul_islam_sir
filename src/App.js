import logo from './logo.svg';
import './App.css';

import Todos from './components/Home/Todos';
import NewTodo from './components/Home/NewTodo';
import { useState } from 'react';

const dummytask = ['task1','task2'];


function App() {

  const [task,setTask] = useState(dummytask);
  
  const handleTodoTask=(newTask)=>{
    setTask([...task,newTask]);
  }
   console.log("testing from app : "+task)
  return (
    <div className="App">
     
     
     <NewTodo onTodoTask={handleTodoTask}></NewTodo>
     <Todos todoTask={task} ></Todos>

    </div>
  );
}

export default App;
