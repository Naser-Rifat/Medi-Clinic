import React from 'react';
import Articles from '../Articles/Articles';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HomeServices from '../HomeServices/HomeServices';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Services></Services>
            <Articles></Articles>
            <Footer></Footer>
        </div>
    );
};

export default Home;