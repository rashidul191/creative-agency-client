import React from 'react';
import SiteBar from '../../UserOder/SiteBar/SiteBar';
import AdminServiceListDetail from '../AdminPanelForm/AdminServiceListDetail';


const AdminServiceList = () => {
    return (
        <section className="container pt-4">
        <div className="row">
            <div className="col-md-2">
                <SiteBar></SiteBar>
            </div>
            <div className="col-md-10">
               <AdminServiceListDetail></AdminServiceListDetail>
            </div>
        </div>
    </section>
    );
};

export default AdminServiceList;