import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
   
    return (
        <div>
            <nav>
                <ul>
                    <NavLink to="/" end style={({isActive})=>{
                        return {
                            backgroundColor: isActive ? "white" : "black",
                            color: isActive ? "white" : "black",
                        }
                    }}><li>Home</li></NavLink>
                    <NavLink to="/about"  style={({isActive})=>{
                        return {
                            backgroundColor: isActive ? "white" : "black",
                            color: isActive ? "white" : "black",
                        }
                    }}><li>About</li></NavLink>
                    <NavLink to="/login" style={({isActive})=>{
                        return {
                            backgroundColor: isActive ? "white" : "black",
                            color: isActive ? "white" : "black",
                        }
                    }}><li>Login</li></NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
