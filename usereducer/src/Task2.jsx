import { use, useReducer, useState } from 'react'


const initialState = {
    username: "",
    email: "",
    password: "",
    submitted:false
}

function reducer(state, action) {
    switch (action.type) {
        case "submit":
        
                console.log(state)
                return {
                    ...state,
                    submitted:true
                }

            break;
    
        default:
            return {
                ...state,
                [action.type]: action.value
            }
          
    }
}

function Task2() {
    const [state, dispatch] = useReducer(reducer, initialState)



    return (
        <div>
            <form onSubmit={(e => {
                 e.preventDefault();
                dispatch({ type: "submit" })
            })}>
                <input type="text" name='username' value={state.username} onChange={(e) => {
                    dispatch({ type: "username",value:e.target.value })
                }} />
                <input type="email" name='email' value={state.email} onChange={(e) => {
                    dispatch({ type: "email" , value:e.target.value})
                }} />
                <input type="password" name='password' value={state.password} onChange={(e) => {
                    dispatch({ type: "password" ,value:e.target.value})
                }} />
                <input type="submit" value="submit"  />
            </form>
          
        </div>
    )
}

export default Task2
