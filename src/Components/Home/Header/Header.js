import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <main >
            <div className="header-component">
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
            </div>
        </main>
    );
};

export default Header;