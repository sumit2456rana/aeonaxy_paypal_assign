import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='px-8 py-[4vw]'>
            <img className='h-12 mb-10' src='https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-color.svg' />
            <div className='flex justify-between items-center flex-wrap gap-5'>
                <ul className='flex gap-6 flex-wrap'>
                    <li className='text-darkBlue hover:underline text-sm font-bold'>
                        <NavLink>Home</NavLink>
                    </li>
                    <li className='text-darkBlue hover:underline text-sm font-bold'>
                        <NavLink>Contact</NavLink>
                    </li>
                    <li className='text-darkBlue hover:underline text-sm font-bold'>
                        <NavLink>Fees</NavLink>
                    </li>
                    <li className='text-darkBlue hover:underline text-sm font-bold'>
                        <NavLink>Security</NavLink>
                    </li>
                    <li className='text-darkBlue hover:underline text-sm font-bold'>
                        <NavLink>Apps</NavLink>
                    </li>
                    <li className='text-darkBlue hover:underline text-sm font-bold'>
                        <NavLink>Shops</NavLink>
                    </li>
                    <li className='text-darkBlue hover:underline text-sm font-bold'>
                        <NavLink>Enterprise</NavLink>
                    </li>
                    <li className='text-darkBlue hover:underline text-sm font-bold'>
                        <NavLink>Partners</NavLink>
                    </li>
                </ul>
                <div>
                    <img className='w-6 h-4 cursor-pointer' src='https://flagemoji.net/img/flags/usa-flag.png' alt='us-flag' />
                </div>
            </div>
            <div className='w-full h-[1px] my-5'>
                <hr />
            </div>
            <div className='flex justify-between items-center flex-wrap gap-0 md:gap-5'>
                <ul className='flex gap-6 flex-wrap'>
                    <li className='text-darkBlue hover:underline text-sm font-bold'>
                        <NavLink>About</NavLink>
                    </li>
                    <li className='text-darkBlue hover:underline text-sm font-bold'>
                        <NavLink>Newsroom</NavLink>
                    </li>
                    <li className='text-darkBlue hover:underline text-sm font-bold'>
                        <NavLink>Jobs</NavLink>
                    </li>
                    <li className='text-darkBlue hover:underline text-sm font-bold'>
                        <NavLink>Investor Relations</NavLink>
                    </li>
                    <li className='text-darkBlue hover:underline text-sm font-bold'>
                        <NavLink>Values in Action</NavLink>
                    </li>
                    <li className='text-darkBlue hover:underline text-sm font-bold'>
                        <NavLink>Public Policy</NavLink>
                    </li>
                </ul>
                <div className='w-full h-[1px] my-5 block md:hidden'>
                    <hr />
                </div>
                <ul className='flex gap-6 flex-wrap'>
                    <li className='text-sm text-[#545D68]'>
                        &copy; 1999-2024
                    </li>
                    <li className='text-darkBlue hover:underline text-sm font-bold'>
                        <NavLink>Accessibility</NavLink>
                    </li>
                    <li className='text-darkBlue hover:underline text-sm font-bold'>
                        <NavLink>Privacy</NavLink>
                    </li>
                    <li className='text-darkBlue hover:underline text-sm font-bold'>
                        <NavLink>Cookies</NavLink>
                    </li>
                    <li className='text-darkBlue hover:underline text-sm font-bold'>
                        <NavLink>Legal</NavLink>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer