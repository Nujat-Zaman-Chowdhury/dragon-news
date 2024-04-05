import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetail from "../Pages/NewsDetail/NewsDetail";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch('/news.json')
        },
        {
          path:'/news/:id',
          element:<PrivateRoute><NewsDetail></NewsDetail></PrivateRoute>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>  
        }
      ]
    }
  ])