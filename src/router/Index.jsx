import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Login from '../pages/Login'
const App = lazy(() => import("../App"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <Login /> },
      
    ],
  },
]);

  