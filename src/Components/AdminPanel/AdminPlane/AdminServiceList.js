import React from 'react';
import AdminServiceListDetail from '../AdminPanelForm/AdminServiceListDetail';
import AdminSiteBar from '../AdminSiteBar/AdminSiteBar';

const AdminServiceList = () => {
    return (
        <section className="container pt-4">
        <div className="row">
            <div className="col-md-2">
                <AdminSiteBar></AdminSiteBar>
            </div>
            <div className="col-md-10">
               <AdminServiceListDetail></AdminServiceListDetail>
            </div>
        </div>
    </section>
    );
};

export default AdminServiceList;