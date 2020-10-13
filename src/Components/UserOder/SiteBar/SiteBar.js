import React from 'react';
import logo from '../../../images/logos/logo.png';

const SiteBar = () => {
    return (
        <section>
            <div>
                <img className="logo-style" src={logo} alt="" />
            </div>
            <div>
                <p> Order</p>
                <p> Service list</p>
                <p> Review</p>
            </div>
        </section>
    );
};

export default SiteBar;