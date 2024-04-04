import React from 'react'

const PayPalTransactionDetails = () => {
  return (
    <div className='max-w-[72rem] mx-auto text-[0.875rem] px-[2rem] sm:px-[3.75rem] py-12'>
        <p>PayPal covers all transaction fees. You’re donating to PayPal Giving Fund, a 501(c)(3) charity, <span className='text-lightBlue underline cursor-pointer font-bold'>subject to its terms</span>. Donations can take <span className='text-lightBlue underline cursor-pointer font-bold'>up to 45 days</span> to get to your chosen charity. It’s rare, but if <span className='text-lightBlue underline cursor-pointer font-bold'>we can’t send your money to this charity</span>, we’ll ask you to recommend another. If we can’t reach you, we’ll send it to a similar charity and keep you updated. Your donation is typically tax-deductible in the US. The logos on this site and descriptions under “About this charity” are provided by and managed by the charities themselves.</p>
    </div>
  )
}

export default PayPalTransactionDetails