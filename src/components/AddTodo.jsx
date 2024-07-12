import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice"

const AddTodo = ()=>{
    let dispatch = useDispatch()
    const[task,setTask]=useState("")
    const handleChange = (e)=>{
        setTask(e.target.value)
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        dispatch(addTodo(task))
    }

    return(
        <>
         <form action="" onSubmit={onSubmit}>
            <input type="text" name="task" onChange={handleChange} />
            <button type="submit">ADD TODO</button>
         </form>
        </>
    )
}

export default AddTodo;