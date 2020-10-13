import React from 'react';
import './ServiceListDatiles.css';
import Service1 from '../../../../images/icons/service1.png';
import Service2 from '../../../../images/icons/service2.png';


const ServiceListDatiles = () => {
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
                                        <h3>Web and Mobile design</h3>
                                        <p><small>We craft stunning and amazing web Ul <br />using a well drrafted UX to fit your product.</small></p>
                                    </div>
                                </div>
                                <div className="col-md-5 services-list-card">
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
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceListDatiles;