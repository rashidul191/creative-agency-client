import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const AdminSiteBar = () => {
    return (
        <section>
            <div className="mb-5">
                <Link to="/"><img className="logo-style" src={logo} alt="" /></Link>
            </div>
            <div className="">
                <Link to="/adminServiceList"><li>Service list</li></Link>
                <Link to="/addService"><li>Add Service</li></Link>
                <Link to="/makeAdmin"><li>Make Admin</li></Link>
            </div>
        </section>
    );
};

export default AdminSiteBar;