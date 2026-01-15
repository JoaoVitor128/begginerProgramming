import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from "./routes/Home.jsx"
import ErrorPage from './routes/ErrorPage.jsx'
import ClassPage from './routes/ClassPage.jsx'
import About from './routes/About.jsx'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children:[
        {path: "/",
        element: <Home/>
        },
        {
          path: "/class/:mod/:id",
          element: <ClassPage/>
        },
        {
          path: "/about",
          element: <About/>
        }
      ]
    }
  ])
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
