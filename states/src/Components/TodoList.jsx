import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'


function TodoList() {
    const [todos, setTodo] = useState([]);
    const [inputValue,setInputValue] = useState("");
    function addTodo() {
        const newTodo = {
            maal:inputValue,
            id:uuidv4()
        }
        setTodo([...todos, newTodo]);
        setInputValue("");

    }
    
    function trackValue(event){
        setInputValue(event.target.value);
    }

    return (
        <div>

            <input type="text" className='outline-none bg-zinc-800 text-white  ml-3 p-3 rounded-md' placeholder='Add a TODO' value={inputValue} onChange={trackValue}/>
            <button onClick={() => addTodo()} className='w-40 h-14 rounded-full bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500 hover:scale-105 transition-transform duration-300 hover:shadow-lg shadow-orange-500 text-white cursor-pointer'>Add TODO</button>
            <h2 className="text-2xl text-center font-sans">TODOs</h2>
            <ul className='list-disc pl-5 mt-3 '>
                {
                    Array.isArray(todos) && todos.map(
                        (todo) => <li key={todo.id} className='text-xl font-sans font-semibold'>
                            {todo.maal}
                            {todo.id}
                        </li>
                        ) 
                }
            </ul>
        </div>
    )
}

export default TodoList
