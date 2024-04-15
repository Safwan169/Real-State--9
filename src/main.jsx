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
import Anotherlogin from './componants/Anotherlogin.jsx';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from './componants/PrivateRoute.jsx';
import User from './componants/User.jsx';
import Update from './componants/Update.jsx';


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
      path: "/data/:id",
      loader: () => fetch("/Estates.json"),

      element: <PrivateRoute><Details></Details></PrivateRoute>
    },{
      path: "/login",
      element: <Login></Login>
    }, 
    , {
      path: "/an",

      element: <Anotherlogin></Anotherlogin>
    }
    , {
      path: "/user",

      element: <User></User>
    }
    , {
      path: "/update",

      element: <Update></Update>
    }
    ]

  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <All>
   <HelmetProvider>

    
      <RouterProvider router={router} />

    
    
    
   </HelmetProvider>
   </All>
  </React.StrictMode>,
)
