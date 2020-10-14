import React from 'react';
import './AddServiceDeatil.css';

const AddServiceDeatil = () => {
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
                    <div className="addService-body-1">
                        <div className="addService-container">
                            <div className="row addService-body">
                                <div className="col-md-6 body3">
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1"><h6>Service Title</h6></label>
                                            <input type="text" class="form-control" placeholder="Enter title" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1"><h6>Description</h6></label>
                                        <textarea class="form-control" rows="3"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-6 body4">
                                    <div class="form-group">
                                        <label for="exampleFormControlFile1">Icon</label>
                                        <input type="file" class="form-control-file " />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <ul className="ml-auto">
                                <button type="button" className="btn-submit">Submit</button>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AddServiceDeatil;