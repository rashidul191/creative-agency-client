import React from 'react';
import SiteBar from '../../SiteBar/SiteBar';
import ServiceListDatiles from '../ServiceListDatiles/ServiceListDatiles';

const ServiceList = () => {

    document.title="Service List";

    return (


        <section className="container pt-4">
            <div className="row">
                <div className="col-md-2">
                    <SiteBar></SiteBar>
                </div>
                <div className="col-md-10">
                    <ServiceListDatiles></ServiceListDatiles>
                </div>
            </div>
        </section>



    );
};

export default ServiceList;