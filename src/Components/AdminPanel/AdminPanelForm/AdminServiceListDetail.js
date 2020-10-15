import React from 'react';
import './AdminServiceListDetail.css';
import { useState } from 'react';
import { useEffect } from 'react';


const AdminServiceListDetail = () => {

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/userDetailsByData')
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [])

    // console.log(userInfo);

    return (
        <section>
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h5>Service List</h5>
                    </div>
                    <div className="col-md-5 ml-5">
                        <small><h6>Sufi Ahmed</h6></small>
                    </div>
                </div>
                <div className="order-from-body pt-3">

                    <div className="serviceList-container ">
                        <div className="row body-part-1">
                            <div className="col-md-2 mr-3">Name</div>
                            <div className="col-md-3 mr-4">Email ID</div>
                            <div className="col-md-2 mr-2">Service</div>
                            <div className="col-md-2 mr-2"> Project Details</div>
                            <div className="col-md-2 ml-2"> Status</div>

                        </div>

                        {/* userInfo.map( userDetails => <AdminServiceListDetail name = {userDetails.name} email = {userDetails.email} topic = {userDetails.topic} projectDetails = {projectDetails}></AdminServiceListDetail>) */}

                        <div className="row mt-3 body-part-2">

                            {
                                userInfo.map(user => <div >
                                    <div className=" mr-3">
                                        <h6>{user.name} {user.email} {user.topic} {user.projectDetails}</h6>
                                        {/* <div className="col-md-3 mr-4"><h6>{user.email}</h6></div>
                                    <div className="col-md-2 mr-2"><h6>{user.topic}</h6></div>
                                    <div className="col-md-2 mr-2"><h6>{user.projectDetails}</h6></div> */}

                                        <div className=" ml-2">
                                            <div class="form-group">
                                                <select class="form-control option-style" >
                                                    <option className="text-option1">Pending</option>
                                                    <option className="text-option2">Done</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminServiceListDetail;