import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const SiteBar = () => {
    return (
        <section>
            <div className="mb-5">
                <img className="logo-style" src={logo} alt="" />
            </div>
            <div className="">
                <p><Link to="/userOrder">Order</Link></p>
                <p><Link to="/servicesList">Service list</Link></p>
                <p><Link to="/review">Review</Link></p>
            </div>
        </section>
    );
};

export default SiteBar;