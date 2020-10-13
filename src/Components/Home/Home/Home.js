import React from 'react';
import ClientsFeedback from '../ClientFeedback/ClientsFeedback/ClientsFeedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProvideServices from '../ProvideServices/ProvideServices';
import SomeWorks from '../SomeWorks/SomeWorks/SomeWorks';

const Home = () => {
    return (
        <div className="">
           <Header></Header>
           <ProvideServices></ProvideServices>
           <SomeWorks></SomeWorks>
           <ClientsFeedback></ClientsFeedback>
           <Footer></Footer>
        </div>
    );
};

export default Home;