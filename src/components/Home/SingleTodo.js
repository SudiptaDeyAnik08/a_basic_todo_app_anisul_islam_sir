import React from "react";

const SingleTodo = (props)=>{
    console.log(props.singleTask)
    return(
        <div>
            {
                <p>{props.singleTask}</p>
            }
           
        </div>
    )
}

export default SingleTodo;