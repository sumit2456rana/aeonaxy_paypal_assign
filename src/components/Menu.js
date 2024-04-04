import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='menu overflow-auto bg-white top-[4.1rem] h-screen w-screen min-h-[calc(100vh - 3.5rem)] z-10 absolute text-darkBlue '>
        <div>
            <ul className='mx-6 text-lg pt-4 font-bold text-start'>
                <li className='py-3 -ml-4 -mr-6'>
                    <NavLink className='hover:text-lightBlue py-2 pl-4 block w-full rounded-l-xl border-t-[.0625rem] border-l-[.0625rem] border-b-[.0625rem] border-transparent duration-300 ease-in-out hover:border-[#e6e0d9]'>
                        Personal
                    </NavLink>
                </li>
                <hr />
                <li className='py-3 -ml-4 -mr-6'>
                    <NavLink className='hover:text-lightBlue py-2 pl-4 block w-full rounded-l-xl border-t-[.0625rem] border-l-[.0625rem] border-b-[.0625rem] border-transparent duration-300 ease-in-out hover:border-[#e6e0d9]'>
                        Business
                    </NavLink>
                </li>
                <hr />
                <li className='py-3 -ml-4 -mr-6'>
                    <NavLink className='hover:text-lightBlue py-2 pl-4 block w-full rounded-l-xl border-t-[.0625rem] border-l-[.0625rem] border-b-[.0625rem] border-transparent duration-300 ease-in-out hover:border-[#e6e0d9]'>
                        Developer
                    </NavLink>
                </li>
                <hr />
                <li className='py-3 -ml-4 -mr-6'>
                    <NavLink className='hover:text-lightBlue py-2 pl-4 block w-full rounded-l-xl border-t-[.0625rem] border-l-[.0625rem] border-b-[.0625rem] border-transparent duration-300 ease-in-out hover:border-[#e6e0d9]'>
                        Help
                    </NavLink>
                </li>
                <hr />
            </ul>
        </div>
    </div>
  )
}

export default Menu