import React, { useState } from "react";

const NewTodo = (props)=>{

    const [task,setTask] = useState('');
    
    //Methods
    const handleInputChange =(event)=>{
        setTask(event.target.value);
    }

    const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(task);
    props.onTodoTask(task);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="todo">New Todo:  </label>
                <input type="text" id ="todo" name ="todo" value={task} onChange={handleInputChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewTodo;