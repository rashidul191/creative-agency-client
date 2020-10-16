import React, { useContext } from 'react';
import './ServiceListDatiles.css';
import Service1 from '../../../../images/icons/service1.png';
import loadingImg from '../../../../images/loading.gif';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../../App';


const ServiceListDatiles = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        fetch('https://glacial-stream-51727.herokuapp.com/userDetailsByData')
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
                        <small><h6>{loggedInUser.name}</h6></small>
                    </div>
                </div>
                <div className="order-from-body">
                    <div className="pt-1">
                        <div className="serviceList-order">
                            <div className="row">
                                {
                                    userInfo.length === 0 && <img className="loadingImg-size" src={loadingImg} alt="" />
                                }
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