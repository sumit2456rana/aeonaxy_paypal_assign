import React from 'react'
import Navbar from '../components/Navbar';
import DonationInfo from '../components/DonationInfo';
import PayPalDonationBenefits from '../components/PayPalDonationBenefits';
import PayPalTransactionDetails from '../components/PayPalTransactionDetails';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <DonationInfo />
            <PayPalDonationBenefits />
            <PayPalTransactionDetails />
            <Footer />
        </>
    )
}

export default Home;