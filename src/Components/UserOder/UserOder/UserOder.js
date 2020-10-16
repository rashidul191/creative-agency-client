import React from 'react';
import './UserOder.css';
import SiteBar from '../SiteBar/SiteBar';
import OrderForm from '../OrderForm/OrderForm';

const UserOder = () => {

    document.title="Order";
    
    return (
        <section className="container pt-4">
            <div className="row">
                <div className="col-md-2">
                    <SiteBar></SiteBar>
                </div>
                <div className="col-md-10">
                    <OrderForm> </OrderForm>
                </div>
            </div>
        </section>
    );
};

export default UserOder;