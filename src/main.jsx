import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import About from './pages/About'
import Services from './pages/Services'
import Contacto from './pages/Contacto'
import Login from './pages/Login'
import Register from './pages/Register'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/pricing",
    element: <Pricing />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/contact",
    element: <Contacto />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
