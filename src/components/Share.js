import React, { useState } from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import DoneIcon from '@mui/icons-material/Done';
import Button from './Button';

const Share = () => {
    const [isCopied, setIsCopied] = useState(false);
    const urlToShare = 'https://www.paypal.com/US/fundraiser/charity/1279469'
    function handleCopy() {
        const urlElement = document.getElementById('urlText');
        if (urlElement) {
            const urlToCopy = urlElement.textContent;
            navigator.clipboard.writeText(urlToCopy)
                .then(() => {
                    setIsCopied(true);
                })
                .catch((error) => {
                    console.error('Error copying text: ', error);
                });
        }
    }

    function shareOnFacebook() {
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
        window.open(shareUrl, '_blank', 'noopener noreferrer');
    }

    function shareOnTwitter() {
        const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}`;
        window.open(shareUrl, '_blank', 'noopener noreferrer');
    }

    function shareViaEmail() {
        const subject = encodeURIComponent('Check out this link!');
        const body = encodeURIComponent(`Hey there,\n\nI thought you might be interested in this link:\n${urlToShare}`);
        const shareUrl = `mailto:?subject=${subject}&body=${body}`;
        window.location.href = shareUrl;
    }

    return (
        <div className='border border-[#e6e0d9] rounded-xl p-[14px] mb-12'>
            <div className='pt-3 text-center font-medium text-xl'>
                Share and inspire others
            </div>
            <div className='mt-4 flex justify-center gap-4'>
                <div onClick={shareOnFacebook} className='h-12 w-12 text-2xl text-darkBlue rounded-full bg-[#faf8f5] flex items-center justify-center cursor-pointer'>
                    <FacebookRoundedIcon />
                </div>
                <div onClick={shareOnTwitter} className='h-12 w-12 text-2xl text-darkBlue rounded-full bg-[#faf8f5] flex items-center justify-center cursor-pointer'>
                    <XIcon />
                </div>
                <div onClick={shareViaEmail} className='h-12 w-12 text-2xl text-darkBlue rounded-full bg-[#faf8f5] flex items-center justify-center cursor-pointer'>
                    <MailSharpIcon />
                </div>
            </div>
            <div className='p-8 break-words flex items-center mt-4 rounded-sm bg-[#faf8f5]'>
                <p id='urlText' className='break-all mr-4'>https://www.paypal.com/US/fundraiser/charity/1279469</p>
                {!isCopied ? <Button onClickHandler={handleCopy}>Copy</Button> : <button onClick={() => setIsCopied(false)} className='py-1 px-8 bg-green-500 text-white font-bold rounded-3xl border-2'>
                    <DoneIcon />
                </button>}
            </div>
        </div>
    )
}

export default Share;
