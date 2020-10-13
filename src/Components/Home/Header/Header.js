import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import ProductsLogo from '../ProductsLogo/ProductsLogo';
import './Header.css';

const Header = () => {
    return (
        <main >
            <div className="header-component">
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
            </div>
            <div className="productLogo-container">
                <ProductsLogo></ProductsLogo>
            </div>
        </main>
    );
};

export default Header;