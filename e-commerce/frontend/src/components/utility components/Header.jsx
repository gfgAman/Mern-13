import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-black text-white flex justify-end'>
            <div className='flex justify-between w-75 p-3'>

                <div className='hover:cursor-pointer hover:text-red-600' onClick={() => navigate('/')}>Home</div>
                <div className='hover:cursor-pointer hover:text-red-600' onClick={() => navigate('/cart')}>Cart</div>
                <div className='hover:cursor-pointer hover:text-red-600' onClick={() => navigate('/login')}>Logout</div>
            </div>
        </div>
    )
}

export default Header