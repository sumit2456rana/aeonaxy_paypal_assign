import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <NavLink to="/">
        <img className='h-[2.25rem]' src='https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg' alt='Logo' />
    </NavLink>
  )
}

export default Logo