import React from 'react';
import AdminSiteBar from '../AdminSiteBar/AdminSiteBar';
import AddServiceDeatil from './AddServiceDeatil/AddServiceDeatil';

const AddService = () => {
    return (
        <section className="container pt-4">
        <div className="row">
            <div className="col-md-2">
                <AdminSiteBar></AdminSiteBar>
            </div>
            <div className="col-md-10">
               <AddServiceDeatil></AddServiceDeatil>
            </div>
        </div>
    </section>
    );
};

export default AddService;