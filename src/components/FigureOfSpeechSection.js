import React from 'react'
import {ReactComponent as ArrowTabIcon} from '../assets/arrowTabIcon.svg'
import {ReactComponent as HeartIcon} from '../assets/heartIcon.svg'
const FigureOfSpeechSection = () => {
    return (
        <div className='w-full lg:w-[60%] pb-4'>
            <p className='text-[1.125rem] my-5'>Donate to PayPal Giving Fund</p>
            <div className='text-[2.75rem] leading-10'>Figures of Speech Theatre</div>
            <div className='py-1 px-3 mt-6 mb-3 text-lightBlue bg-blue-200 rounded-3xl inline-block font-medium'>Arts & culture</div>
            <div className='leading-[1.7]'>
                <p className='text-[#001435] text-lg my-[18px]'>Freeport, Me</p>
                <p className='text-[#001435] text-lg my-[18px]'>EIN: 01-0432620</p>
                <div className='flex gap-4'>
                    <div className='h-12 w-12 text-2xl text-darkBlue rounded-full bg-[#faf8f5] flex items-center justify-center cursor-pointer'>
                        <ArrowTabIcon  />
                    </div>
                    <div className='h-12 w-12 text-2xl text-darkBlue rounded-full bg-[#faf8f5] flex items-center justify-center cursor-pointer'>
                        <HeartIcon />
                    </div>
                </div>
            </div>
            <p className='my-[18px] text-lg text-[#001435]'>Figures of Speech Theatre creates and tours visionary works of performance forged at the intersection of poetry, music, sculpture and dance. The company has toured all over the world - from Sofia, Bulgaria to Tokyo, Japan, to Lima, Peru. Besides performing at venues such as the Kennedy Center, the Smithsonian Institution, and the New Victory Theatre on Broadway, the company retains a strong commitment to teaching and performing throughout its home state of Maine.</p>
            <p className='text-base my-5'>Source: PayPal Giving Fund charity profile</p>
            <p className='text-sm mt-5 text-[#545D68]'>The info in this profile is provided and managed by the charities themselves.</p>
        </div>
    )
}

export default FigureOfSpeechSection