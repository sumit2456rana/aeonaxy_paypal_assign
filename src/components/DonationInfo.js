import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FigureOfSpeechSection from './FigureOfSpeechSection';
import DonateSection from './DonateSection';

const DonationInfo = () => {
  return (
    <div className='max-w-[72rem] mx-auto px-0 sm:px-9'>
      <div className='max-w-[1024px] mx-auto p-7 flex items-center gap-3 text-lightBlue text-xl font-medium cursor-pointer hover:underline'>
        <KeyboardBackspaceIcon />
        Donate with PayPal
      </div>
      <div className='bg-lightBlue rounded-none sm:rounded-t-3xl mx-0 sm:mx-[1%] h-[200px] md:h-[230px] sm:h-[150px]' style={{backgroundImage: 'url("https://www.paypalobjects.com/paypal-ui/illustrations/scenic/svg/blue-waves.svg")', backgroundPosition: 'center', backgroundSize: '100%', backgroundRepeat: 'no-repeat'}}></div>
      <div className='ml-6 cursor-pointer bg-white border-b border-solid flex overflow-hidden w-24 h-24 md:w-[140px] md:h-[140px] rounded-[68px] mt-[-68px] mb-6'>
        <img className='md:max-w-[75px] md:max-h-[75px] max-w-[58px] max-h-[58px] m-auto' src='https://pics.paypal.com/00/s/OTAwNGFiNTQtNWNkNC00MzQ3LWE1ODEtYmYxOTI1NzdjZDc5/file.JPG'  />
      </div>
      <div className='flex gap-4 px-6 flex-wrap lg:flex-nowrap'>
        <FigureOfSpeechSection />
        <DonateSection />
      </div>
    </div>
  );
};

export default DonationInfo;
