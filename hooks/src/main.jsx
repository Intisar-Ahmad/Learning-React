import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter ,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Login from './components/Login.jsx'
import User from './components/User.jsx';


const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'',
                element:<Home />
            },
            {
                path:'about',
                element:<About />
            },
            {
                path:'login',
                element:<Login />
            },
            {
                path:'user/:username',
                element:<User />
            },
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
