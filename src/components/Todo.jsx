import React from "react"
import { useSelector } from "react-redux"
import AddTodo from "./AddTodo"
import { useDispatch } from "react-redux"
import { deleteTodo } from "../features/todo/todoSlice"
import { markAsDone } from "../features/todo/todoSlice"

const Todo = ()=>{
    let dispatch = useDispatch()

    const handleDeleteTodo = (id)=>{
        dispatch(deleteTodo(id))
    }


    const handleDone = (id)=>{
        dispatch(markAsDone(id))
    }

    const todos = useSelector((state)=>state.todos)
    console.log(todos);
    return(
    <>
       <h1>Todos</h1>
       <AddTodo/>
       <ul>
        {todos.map((todo)=>{
           return <li style={todo.isDone?{textDecoration:"lineThrough"}:{}} key={todo.id}>{todo.task}<button onClick={()=>{
            handleDeleteTodo(todo.id)
           }}>Delete</button><button onClick={()=>{
            handleDone(todo.id)
           }}>MarkASDone</button></li>
        })}
       </ul>
    </>
    )
}

export default Todo