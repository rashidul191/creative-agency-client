import React from 'react';

const AdminSiteBar = () => {
    return (
        <section>
            <div className="mb-5">
                <img className="logo-style" src={logo} alt="" />
            </div>
            <div className="">
                <p><Link to="/adminServiceList">Service list</Link></p>
                <p><Link to="/addService">Add Service</Link></p>
                <p><Link to="/makeAdmin">Make Admin</Link></p>
            </div>
        </section>
    );
};

export default AdminSiteBar;