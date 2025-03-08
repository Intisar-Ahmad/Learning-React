import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'


function TodoList() {
    const [todos, setTodo] = useState([]);
    const [inputValue,setInputValue] = useState("");
    function addTodo() {
        const newTodo = {// create new todo
            maal:inputValue,
            id:uuidv4(),
            done:false
        }
        setTodo((todos)=>{
           return [...todos, newTodo]// add it using callback
    });
        setInputValue("");

    }
    
    function trackValue(event){
        setInputValue(event.target.value);
    }

    function deleteTodo(id) {
        // const index = todos.findIndex(todo => todo.id === id);
        // todos.splice(index,1);
        // setTodo([...todos]);

        setTodo(todos=>todos.filter(todo => todo.id !== id));
    }

    function uppercaseAll() {
        setTodo(todos.map((todo)=>{
            return {
                ...todo,
                maal:todo.maal.toUpperCase()
            }
        }))
    }

    function uppercaseOne(id) {
       setTodo((prevtodos)=>{
      return  prevtodos.map(todo=>{
          return todo.id === id ? {...todo,maal:todo.maal.toUpperCase()}:todo;   
        })
       })
    }

    function markDone(id) {
        setTodo(prevTodo=>{
            return prevTodo.map(todo=> todo.id === id? {...todo,done:!todo.done}:todo);
        })
    }
    return (
        <div>

            <input type="text" className='outline-none bg-zinc-800 text-white  ml-3 p-3 rounded-md' placeholder='Add a TODO' value={inputValue} onChange={trackValue}/>
            <button onClick={() => addTodo()} className='w-40 h-14 rounded-full bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500 hover:scale-105 transition-transform duration-300 hover:shadow-lg shadow-orange-500 text-white cursor-pointer'>Add TODO</button>
            <h2 className="text-2xl text-center font-sans">TODOs</h2>
            <ul className='list-disc pl-5 mt-3 '>
                {
                    Array.isArray(todos) && todos.map(
                        (todo) => <li key={todo.id} className={`text-xl font-sans font-semibold ${todo.done && 'line-through'}`}>
                            
                            {todo.maal}
                        <button onClick={()=>deleteTodo(todo.id)} className='bg-amber-300 text-lg p-2 rounded-md cursor-pointer'>Delete</button>
                        <button onClick={()=>uppercaseOne(todo.id)} className='bg-amber-300 text-lg p-2 rounded-md cursor-pointer'>upper</button>
                        <button onClick={()=>markDone(todo.id)} className='bg-amber-300 text-lg p-2 rounded-md cursor-pointer'>{todo.done? "NotDone" : "Done"}</button>
                        </li>
                        ) 
                }
            </ul>
            <button className='w-40 h-14 rounded-full bg-gradient-to-r from-blue-500 via-green-500  to-red-500 hover:scale-105 transition-transform duration-300 hover:shadow-lg shadow-orange-500 text-white cursor-pointer' onClick={uppercaseAll}>UPPERCASE</button>
        </div>
    )
}

export default TodoList
