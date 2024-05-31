import React from 'react'
import { NavLink } from 'react-router-dom'

const SuccessPage = () => {
    return (
        <>
            <h1 className='text-white text-3xl font-bold mt-20 mb-5'>
                Thank you for your submission :)
            </h1>
            <NavLink className="text-white hover:bg-gray-500 rounded-md px-3 py-2 text-l font-bold" to="/submit-dicho"> {/* flex-shrink-0 => item will not shrink */}
                Submit Another Dicho
            </NavLink>
            <NavLink className="text-white hover:bg-gray-500 rounded-md px-3 py-2 text-l font-bold" to="/dichos"> {/* flex-shrink-0 => item will not shrink */}
                Browse Dichos
            </NavLink>
        </>
    )
}

export default SuccessPage
