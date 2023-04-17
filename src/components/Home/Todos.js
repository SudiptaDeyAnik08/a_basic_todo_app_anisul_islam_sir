import React from "react";
import SingleTodo from "./SingleTodo";

const Todos=(props)=>{


    console.log(props.todoTask);
  
    return(
        <div>
            {props.todoTask.map((singleTask,index)=> <SingleTodo  singleTask={singleTask} key={index}></SingleTodo>)}

           
        </div>
    )
}

export default Todos;