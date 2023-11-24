import React from 'react'
import Home from '../pages/Home'
import ProductList from '../pages/productsList/ProductList'
import ProductDetail from '../pages/productDetail/ProductDetail'
import Cart from '../pages/cart/Cart'
import Wishlist from '../pages/wishlist/Wishlist'
import ContactDetails from '../pages/personalInfo/ContactDetails'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './ErrorPage'

const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/productList" element={<ProductList />}></Route>
            <Route path="/productDetail" element={<ProductDetail />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="/contactDetails" element={<ContactDetails />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
    )
}

export default PrivateRoutes