import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ProductCatalog from '../Pages/ProductCatalog';
import Layout from '../Layouts/Layout';
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';

const Routes =createBrowserRouter([

    {
        path:'/',
        element:<Layout />,
        children:[{
            path:'/',
            element: <ProductCatalog />
        }]
    },
    {
        path:'/login',
        element: <Login />
    },
    {
        path:'/register',
        element: <Register />
    },
]);

export default Routes;