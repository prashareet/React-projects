import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todoTitle : "Any task",
            completed: false
        }
    ],
    addTodo : (todoTitle)=>{},
    updateTodo : (id, toodoTitle)=>{} ,
    toggleCompleted: (id)=>{},
    deleteTodo : (id)=>{}
})

export const TodoProvider = TodoContext.Provider;

export const useTodo = ()=>{
    return useContext(TodoContext)
}