import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Errorpage from './ErrorPage/Errorpage';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Login from './Components/Pages/Login/Login';
import Registration from './Components/Pages/Registration/Registration';
import MainLayout from './Components/MainLayout/MainLayout';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import ServiceDetails from './Components/Sections/Service/ServiceDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json")
      },
      {
        path: "/about",
        element:<About></About>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    {
      path: "/registration",
      element: <Registration></Registration>
    },
    {
      path: "/service/:id",
      element: <ServiceDetails></ServiceDetails>,
      loader: () => fetch("/services.json")
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
