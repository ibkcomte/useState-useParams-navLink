import React from 'react'
import Landing from './shared/Landing.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Blog from './linked/Blog.jsx'
import Business from './linked/Business.jsx'
import './index.css'
import  ErrorPage from './error/ErrorPage.jsx'
import Data from './integrate/Data.jsx'
import {businessPathName, blogPathName, integratePathName} from './pathName/pathName.js'
import { Container } from 'postcss'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import SingleData from './integrate/SingleData.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing /> ,
  },
  {
    path: businessPathName ,
    element: <Business />,
  },

  {
    path: blogPathName ,
    element: <Blog />,
  },
  {
    path: integratePathName ,
    element: <Data />,
  },
  {
    path: "/integrate/:id" ,
    element: <SingleData />,
  },

  {
    path: "*",
    element: <div> <ErrorPage /></div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
