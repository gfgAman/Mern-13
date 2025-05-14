import React from 'react'
import Card from '../utility components/Card'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartItem'

const ProductListing = ({ products }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const addItemHandler = (id, name, price, img, inStock) => {
        const item = {
            name: name,
            price: price,
            img: img,
            inStock: inStock
        }
        dispatch(addToCart(item))
        // navigate(`/product-details/${id}`)
    }
    return (
        <div className='grid md:grid-cols-3 space-y-7 sm:grid-cols-2 grid-cols-1'>
            {
                products.map(({ id, name, price, category, inStock, img }) => (
                    <div onClick={() => addItemHandler(id, name, price, img, inStock)} >
                        <Card id={id} name={name} price={price} category={category} inStock={inStock} img={img} />
                    </div>
                ))
            }
        </div >
    )
}

export default ProductListing