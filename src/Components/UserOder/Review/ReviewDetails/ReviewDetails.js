import React from 'react';

const ReviewDetails = () => {
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
                        <div className="order-from">
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="name" placeholder="Your name" />
                                </div>

                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="company's name Designation" />
                                </div>

                                <div class="form-group">
                                    <textarea class="form-control" rows="3" placeholder=" Description"></textarea>
                                </div>
                    
                                <div>
                                    <button type="button" className="btn-brand">Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewDetails;