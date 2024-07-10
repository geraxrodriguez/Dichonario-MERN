import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/SuccessPage.module.css'

const SuccessPage = () => {
    return (
        <>
            {/* <h1 className='text-white text-3xl font-bold mt-20 mb-5'> */}
            <h1 className={styles.header}>
                Thank you for your submission :)
            </h1>
            <NavLink className={styles.submitAnotherLink} to="/submit-dicho"> {/* flex-shrink-0 => item will not shrink */}
                Click here to submit another dicho.
            </NavLink>
            <NavLink className={styles.browseDichosLink} to="/dichos"> {/* flex-shrink-0 => item will not shrink */}
                Click here to browse dichos.
            </NavLink>
        </>
    )
}

export default SuccessPage
