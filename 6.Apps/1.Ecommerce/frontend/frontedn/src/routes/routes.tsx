import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout'
import Homepage from '../pages/Homepage'
import CategoryPage from '../pages/CategoryPage'
import ProductPage from '../pages/ProductPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            { index: true, element: <Homepage/> },
            { path: 'cat/:cat',  element: <CategoryPage/> },
            { path: 'products/:id',  element: <ProductPage/> },
            { path: 'search',  element: <CategoryPage/> },
        ]
    }
])
