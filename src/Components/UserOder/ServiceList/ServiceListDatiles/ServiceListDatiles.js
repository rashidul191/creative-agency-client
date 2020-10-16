import React from 'react';
import './ServiceListDatiles.css';
import Service1 from '../../../../images/icons/service1.png';
import Service2 from '../../../../images/icons/service2.png';
import { useState } from 'react';
import { useEffect } from 'react';


const ServiceListDatiles = () => {

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/userDetailsByData')
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [])


    return (
        <section>
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h5>Order</h5>
                    </div>
                    <div className="col-md-6">
                        <small><h6>User</h6></small>
                    </div>
                </div>
                <div className="order-from-body">
                    <div className="pt-1">
                        <div className="serviceList-order">
                            <div className="row">

                                {
                                    userInfo.map(user =>
                                        <div className="col-md-5">
                                            <div className="services-list-card">
                                                <div className="row services-margin">
                                                    <div className="col-md-6">
                                                        <img className="service-img" src={Service1} alt="" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <button className="btn-pending-style" type="button">Pending</button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5>{user.topic}</h5>
                                                    <p><small>{user.projectDetails}</small></p>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                }

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceListDatiles;