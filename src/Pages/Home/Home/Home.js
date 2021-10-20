import React from 'react';
import Articles from '../Articles/Articles';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <h2 className="fw-bold my-5 text-red-500">Doorstep Service</h2>

            <HomeServices></HomeServices>
            <hr className="w-50 mx-auto my-28 text-red-600" />

            <Services></Services>
            <hr className="w-50 mx-auto my-28 text-red-600" />

            <h2 className="fw-bold my-5 text-red-500">Articles</h2>

            <Articles></Articles>
        </div>
    );
};

export default Home;