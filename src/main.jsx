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
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from './componants/PrivateRoute.jsx';
import User from './componants/User.jsx';
import Update from './componants/Update.jsx';
import Private2 from './componants/Private2.jsx';
import Error from './Error.jsx';
import About from './componants/About.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
    errorElement:<Error></Error>,
    children: [{
      path: "/",
      loader: () => fetch("/Estates.json"),
      element: <Home></Home>
    }
      , {
      path: "/register",
      element: <Private2><Register></Register></Private2>
    }, {
      path: "/data/:id",
      loader: () => fetch("/Estates.json"),

      element: <PrivateRoute><Details></Details></PrivateRoute>
    },{
      path: "/login",
      element: <Private2><Login></Login></Private2>
    }, 
     {
      path: "/user",

      element: <PrivateRoute> <User></User> </PrivateRoute>
    }
    , {
      path: "/update",

      element: <PrivateRoute> <Update></Update> </PrivateRoute>
    }
    , {
      path: "/about",

      element: <PrivateRoute> <About></About> </PrivateRoute>
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
