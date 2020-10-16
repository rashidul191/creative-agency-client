import React from 'react';
import SiteBar from '../../UserOder/SiteBar/SiteBar';
import AddServiceDeatil from './AddServiceDeatil/AddServiceDeatil';

const AddService = () => {
    return (
        <section className="container pt-4">
        <div className="row">
            <div className="col-md-2">
                <SiteBar></SiteBar>
            </div>
            <div className="col-md-10">
               <AddServiceDeatil></AddServiceDeatil>
            </div>
        </div>
    </section>
    );
};

export default AddService;