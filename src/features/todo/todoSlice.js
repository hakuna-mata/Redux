import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos:[{id:"abc",task:"Code",isDone:false}]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const newTodo = {id:nanoid(),task:action.payload,isDone:false}
            state.todos.push(newTodo)
        },
        deleteTodo:(state,action)=>{
           state.todos = state.todos.filter((todo)=>{
               return todo.id!==action.payload;
            })
        },
        markAsDone:(state,action)=>{
          state.todos = state.todos.map((todo)=>{
                if(todo.id===action){
                    todo.isDone=true
                }
                return todo
            })
        }
    }
})

export const{addTodo,deleteTodo,markAsDone} = todoSlice.actions;
export default todoSlice.reducer;