import React from 'react'
import Card from '../utility components/Card'

import { useNavigate } from 'react-router-dom'

const ProductListing = ({products}) => {
    const navigate = useNavigate()
    return (
        <div className='grid md:grid-cols-3 space-y-7 sm:grid-cols-2 grid-cols-1'>
            {
                products.map(({ id, name, price, category, inStock, img }) => (
                    <div onClick={() => navigate(`/product-details/${id}`)} >
                        <Card id={id} name={name} price={price} category={category} inStock={inStock} img={img} />
                    </div>
                ))
            }
        </div >
    )
}

export default ProductListing