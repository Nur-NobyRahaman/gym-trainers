import React from 'react';
import Header from './Header/Header';
import Services from './Services/Services';
import Footer from '../Home/Footer/Footer'
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
            <Services></Services>
            <Footer></Footer>

        </div>
    );
};

export default Home;