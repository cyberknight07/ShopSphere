import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout'
import Homepage from '../pages/Homepage'
import CategoryPage from '../pages/CategoryPage'
import ProductPage from '../pages/ProductPage'
import SellerProductPage from '../pages/SellerProductPage'
import AddProduct from '../pages/AddProductPage'
import EditProductPage from '../pages/EditProductPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            { index: true, element: <Homepage/> },
            { path: 'categories/:cat/products',  element: <CategoryPage/> },
            { path: 'products/:id',  element: <ProductPage/> },
            { path: 'search',  element: <CategoryPage/> },
            { path: 'my-products',  element: <SellerProductPage/>},
            { path: 'my-products/create-product',  element: <AddProduct/> },
            { path: 'my-products/update-product/:id',  element: <EditProductPage/> },
        ]
    }
])
