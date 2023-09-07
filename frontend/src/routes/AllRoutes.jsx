import React, { useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../pages/Login'
import { Register } from '../pages/Register'
import { Cart } from '../pages/Cart'
import ProductPage from '../pages/ProductPage'
import { HomePage } from '../pages/HomePage'
import SingleProductPage from '../pages/SingleProductPage'
import { Dashoard } from '../Admin/Pages/Dashoard'
import { Admins } from '../Admin/Pages/Admins'
import { Orders } from '../Admin/Pages/Orders'
import { Addproducts } from '../Admin/Pages/Addproducts'
import { Products } from '../Admin/Pages/Products'
import { EditProduct } from '../Admin/Components/EditProduct'
import { Users } from '../Admin/Pages/Users'
import PrivateRoute from './PrivateRoutes'
import AdminRoutes from './AdminRoutes'


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>
        <Route path='/product/:type/:maincategory' element={<ProductPage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/singleproductpage/:id' element={<SingleProductPage/>}/>
        <Route path='/admin/dashboard' element={<AdminRoutes><Dashoard/></AdminRoutes>} />
        <Route path='/admin/admins' element={<AdminRoutes><Admins/></AdminRoutes>} />
        <Route path='/admin/products' element={<AdminRoutes><Products/></AdminRoutes>} />
        <Route path='/admin/addproducts' element={<AdminRoutes><Addproducts/></AdminRoutes>} />
        <Route path='/admin/orders' element={<AdminRoutes><Orders/></AdminRoutes>} />
        <Route path='/admin/products/:id' element={<AdminRoutes><EditProduct/></AdminRoutes>} />
        <Route path='/admin/users' element={<AdminRoutes><Users/></AdminRoutes>}/>
    </Routes>
  )
}
