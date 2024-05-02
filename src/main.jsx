import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { router } from './router/Index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Suspense fallback="Loading">
        <RouterProvider router={router} />
      </Suspense>
   
  </React.StrictMode>,
)
