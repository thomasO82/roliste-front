import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import ErrorPage from './pages/Error/Error.jsx';
import LoginPage from './pages/Login/Login.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   element: <PrivateRoutes />,
      //   children: [
      //     {
      //       path: "/",
      //       element: <Home />,
      //     },
      //     {
      //       path: "/addEmployee",
      //       element: <AddEmployee />,
      //     },
      //   ],
      // },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
