import React from 'react';
import SiteBar from '../../UserOder/SiteBar/SiteBar';

import MakeAdminDetail from './MakeAdminDetail/MakeAdminDetail';

const MakeAdmin = () => {
    return (
        <section className="container pt-4">
        <div className="row">
            <div className="col-md-2">
               
                <SiteBar></SiteBar>
            </div>
            <div className="col-md-10">
               <MakeAdminDetail></MakeAdminDetail>
            </div>
        </div>
    </section>
    );
};

export default MakeAdmin;