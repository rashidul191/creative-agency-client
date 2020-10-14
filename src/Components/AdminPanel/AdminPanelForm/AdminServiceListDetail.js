import React from 'react';
import './AdminServiceListDetail.css';

const AdminServiceListDetail = ({userDetail}) => {
    console.log(userDetail);
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
                        <div className="row mt-3 body-part-2">
                            <div className="col-md-2 mr-3">Rashidul</div>
                            <div className="col-md-3 mr-4">rashidul.191cse.gub@gmail.com</div>
                            <div className="col-md-2 mr-2">Graphic Design</div>
                            <div className="col-md-2 mr-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                            <div className="col-md-2 ml-2">
                                <div class="form-group">
                                    <select class="form-control option-style" >
                                        <option className="text-option1">Pending</option>
                                        <option className="text-option2">Done</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminServiceListDetail;