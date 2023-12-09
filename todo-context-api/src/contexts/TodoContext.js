import { useContext,createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title : "Todo message",
            completed : false

        }
    ],
    addTodo : (todo)=>{

    },
    updateTodo : (todo, id)=>{

    },
    toggleCompleted : (id)=>{

    },
    deleteTodo : (id)=>{

    }

})

export const TodoProvider = TodoContext.Provider;
export const useTodoContext = ()=>{
    useContext(TodoContext);
}