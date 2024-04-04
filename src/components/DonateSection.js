import React, { useState } from 'react'
import Button from './Button'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Share from './Share';
const DonateSection = () => {
    const donateAmount = [25, 50, 100, 200, 'Other'];
    const [selectedAmt, setSelectedAmt] = useState(100);
    return (
        <div className='w-full lg:w-[40%]'>
            <div className='flex gap-3 flex-wrap'>
                {donateAmount.map((amt) => (
                    <div onClick={() => setSelectedAmt(amt)} className={`w-[127px] h-14 grow xl:grow-0 rounded-lg flex justify-center items-center shadow-[0_5px_20px_-9px_rgba(0,0,0,0.4)] cursor-pointer ${selectedAmt === amt && 'bg-darkBlue text-white'}`}>{typeof(amt) === 'number' ? `$${amt}`: amt}</div>  
                ))}
            </div>
            <div className='my-[18px]'>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Share my name and email with this charity." />
                </FormGroup>
            </div>
            <Button type='secondary'>Donate Now</Button>
            <ol className='list-disc ml-8 my-[18px] text-sm'>
                <li>PayPal covers all transaction fees.</li>
                <li>You're donating to PayPal Giving Fund, a 501(c)(3) charity, <span className='text-lightBlue font-bold cursor-pointer'>subject to its Terms</span>.</li>
                <li>Donations can take <span className='text-lightBlue font-bold cursor-pointer'>up to 45 days</span> to get to your chosen charity. It's rare, but if <span className='text-lightBlue font-bold cursor-pointer'>we can't send your money to this charity</span>, we'll ask you to recommend another.</li>
                <li>If we can't reach you, we'll send it to a similar charity and keep you updated. Your donation is typically tax-deductible in the US.</li>
            </ol>
            <Share />
        </div>
    )
}

export default DonateSection
