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
                        <small><h6>Pro Rasel</h6></small>
                    </div>
                </div>
                <div className="order-from-body">
                    <div className="pt-4">
                        <div className="serviceList-order">
                            <div className="row">

                                {
                                    userInfo.map(user =>
                                        <div>
                                            <div className="col-md-5 services-list-card">
                                                <div className="row services-margin">
                                                    <div className="col-md-6">
                                                        <img className="service-img" src={Service1} alt="" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <button className="btn-pending-style" type="button">Pending</button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3>{user.topic}</h3>
                                                    <p><small>{user.projectDetails}</small></p>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                }

                                {/* <div className="col-md-5 services-list-card">
                                <div className="row services-margin">
                                        <div className="col-md-6">
                                            <img className="service-img" src={Service2} alt="" />
                                        </div>
                                        <div className="col-md-6">
                                            <button className="btn-done-style" type="button">Done</button>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>Graphic design</h3>
                                        <p><small>Amazing flyers, social media posts and <br/> brand representaions that would make <br/> your brand stand out.</small></p>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceListDatiles;