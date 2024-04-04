import React from 'react'

const Button = ({children, type = 'primary', onClickHandler}) => {
  return (
    <button
    onClick={onClickHandler}
    className={`py-1 px-6 font-medium whitespace-nowrap rounded-3xl border-2 border-darkBlue hover:border-lightBlue ${type == 'primary' ? 'bg-transparent text-darkBlue hover:text-lightBlue' : 'bg-darkBlue text-white hover:bg-lightBlue'}`}
    >{children}</button>
  )
}

export default Button