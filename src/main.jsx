import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from './App';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import Register from './Components/Register';
import AddProduct from './Components/AddProduct';
import UpdateProduct from './Components/UpdateProduct';
import MyProduct from './Components/MyProduct';
import MyContext from './Components/MyContex';
import Private from './Components/Private';
import Details from './Components/Details';
import ProductPage from './Components/ProductPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/signIn",
        element:<SignIn></SignIn>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/addProduct",
        element:<Private><AddProduct></AddProduct></Private>
      },
      {
        path:"updateProduct",
        element:<Private><UpdateProduct></UpdateProduct></Private>
      },
      {
        path:"/myProduct",
        element:<Private><MyProduct></MyProduct></Private>
      },
      {
        path:"/details",
        element:<Private><Details></Details></Private>
      },
      {
        path:"/productPage/:brandName",
        element:<ProductPage></ProductPage>,
        loader:({params})=>fetch(`brandinfo.json/${params.brandName}`) //it need to update with real api
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContext>
    <RouterProvider router={router} />
    </MyContext>
  </React.StrictMode>,
)
