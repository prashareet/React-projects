import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts';

function App() {
  const [todos, setTodos] = useState([]);
  // Functionality for context api : 
  const addTodo = (todo)=>{
    setTodos((prevTodos)=>{
      return [ ...prevTodos, {id: crypto.randomUUID(), ...todo}]
    })
  }

  const updateTodo = (id, todo) =>{
    setTodos((prevTodos)=> prevTodos.map((eachTodo) => (eachTodo.id ===id ? todo : eachTodo ) ))
  }
  const deleteTodo = (id)=>{
    setTodos((prevTodos) => prevTodos.filter((eachTodo) => eachTodo.id!==id))
  }
  const toggleCompleted = (id)=>{
    setTodos((prevTodos)=> prevTodos.map((eachTodo)=> (eachTodo.id ===id ? {...eachTodo, completed : !eachTodo.completed} :eachTodo )))
  }
  return (
    <>
      <TodoProvider value={{todos, addTodo, updateTodo, toggleCompleted, deleteTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
      </div>
      </TodoProvider>
    </>
  )
}

export default App
