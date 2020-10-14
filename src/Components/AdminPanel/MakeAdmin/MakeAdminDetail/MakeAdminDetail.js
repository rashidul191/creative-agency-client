import React from 'react';
import './MakeAdminDetail.css';

const MakeAdminDetail = () => {
    return (
        <section>
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h5>Add Service</h5>
                    </div>
                    <div className="col-md-5 ml-5">
                        <small><h6>Sufi Ahmed</h6></small>
                    </div>
                </div>
                <div className="order-from-body  pt-3">
                    <div className="addService-body-part">
                        <div className="row makeAdmin-container pt-2">
                            <div className="col-md-6">
                                <div class="form-group">
                                  <h6>Email</h6>
                                    <input type="email" class="form-control" placeholder="email@gmail.com" />
                                </div>
                            </div>
                            <div className="col-md-6 mt-4" >
                                <ul className="ml-auto">
                                    <button type="button" className="btn-submit-btn">Submit</button>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MakeAdminDetail;