import React from 'react';

const data = [
    {
        icon: '/img1.png',
        heading: 'Safe and secure donations',
        para: 'Charities are in good standing so you can donate more securely.'
    },
    {
        icon: '/img2.png',
        heading: 'No transaction fees',
        para: 'Help charities pay less in fees and do more with your donation.'
    },
    {
        icon: '/img3.png',
        heading: 'Receive a tax receipt',
        para: 'A record of your kindness is sent right to your email.'
    }
];

export default function PayPalDonationBenefits() {
    return (
        <div className='bg-[#faf8f5] w-full'>
            <div className='max-w-[72rem] mx-auto px-8 sm:px-[3.75rem] py-12'>
                <h1 className='text-2xl font-medium mb-8'>PayPal helps your gifts do more good</h1>
                <div className="flex flex-col sm:flex-row gap-8">
                    {data.map((e, i) => (
                        <div key={i} className='flex flex-col items-center sm:items-start'>
                            <img className="h-32 w-32 mb-4 sm:mb-0 sm:mr-4" src={e.icon} alt={e.heading} />
                            <div className="text-center sm:text-left">
                                <p className="font-bold my-2">{e.heading}</p>
                                <p>{e.para}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
