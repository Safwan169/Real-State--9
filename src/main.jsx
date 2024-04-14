import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Router from './componants/Router.jsx';
import Home from './componants/Home.jsx';
import Register from './componants/Register.jsx';
import Login from './componants/Login.jsx';
import Details from './componants/Details.jsx';
import All from './componants/All.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
    children: [{
      path: "/",
      loader: () => fetch("/Estates.json"),
      element: <Home></Home>
    }
      , {
      path: "/register",
      element: <Register></Register>
    }, {
      path: "/login",
      element: <Login></Login>
    }, {
      path: "/data/:id",
      loader: () => fetch("/Estates.json"),

      element: <Details></Details>
    }
    ]

  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <All>
      <RouterProvider router={router} />

    </All>
  </React.StrictMode>,
)
