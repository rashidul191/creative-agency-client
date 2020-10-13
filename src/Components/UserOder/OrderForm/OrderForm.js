import React from 'react';
import './OrderForm.css';

const OrderForm = () => {
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
                                    <input type="text" class="form-control" name="name" placeholder="Your name / company's name" />
                                </div>

                                <div class="form-group">
                                    <input type="email" class="form-control" name="email" placeholder="Your email address" />
                                </div>

                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Graphic Design" />
                                </div>

                                <div class="form-group">
                                    <textarea class="form-control" rows="3" placeholder="Project Details"></textarea>
                                </div>
                                <div className="row">
                                    <div class="form-group col-md-4">
                                        <input type="text" class="form-control" placeholder="Prices" />
                                    </div>
                                    <div className="form-group col-md-8">
                                        <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                </div>
                                <div>
                                    <button type="button" className="btn-brand">Send</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderForm;