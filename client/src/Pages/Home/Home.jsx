import React from 'react';
import Banner from '../../components/Banner/Banner';
import ExploreCategoriesCarousels from '../../components/ExploreCategoriesCarousels/ExploreCategoriesCarousels';
import BannerCarousels from '../../components/BannerCarousels/BannerCarousels';
import ProductListing from '../../components/ProductListing/ProductListing';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import PlanExpireyBanner from '../../components/PlanExpireyBanner/PlanExpireyBanner';
import CustomerReview from '../../components/CustomerReview/CustomerReview';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <>

            <Banner />

            <ExploreCategoriesCarousels />

            <BannerCarousels />

            <ProductListing />

            <FeaturesSection />

            <PlanExpireyBanner />

            <CustomerReview />

            <Footer />


        </ >
    );
}

export default Home;
