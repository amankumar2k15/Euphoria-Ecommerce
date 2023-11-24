import React from 'react'
import Asidebar from '../../components/productListComponent/Asidebar'
import ProductData from '../../components/productListComponent/ProductData'
import WomenClothData from '../../components/productListComponent/WomenClothData'

const ProductList = () => {
    return (
        <div>
            <div className='flex border justify-center px-20'>
                <Asidebar />
                <ProductData />
            </div>
            <WomenClothData />
        </div>
    )
}

export default ProductList