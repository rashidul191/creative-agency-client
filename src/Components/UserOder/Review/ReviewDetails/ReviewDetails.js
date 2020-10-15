import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const ReviewDetails = () => {

    const history = useHistory()

    const { register, handleSubmit, errors } = useForm();

    const reviewSubmit = data => {
        fetch('http://localhost:5000/addReview',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)  
        })
        .then(res => res.json())
            .then(success => {
                if (success) {
                    history.push("/")
                    alert("Your Review Successful.");
                    console.log(data);
                }
            })
    }


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
                            <form onSubmit={handleSubmit(reviewSubmit)}>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="name" ref={register({ required: true })} placeholder="Your name" />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>

                                <div class="form-group">
                                    <input type="text" class="form-control" name="companyName" ref={register({ required: true })} placeholder="company's name Designation" />
                                    {errors.companyName && <span className="text-danger">This field is required</span>}
                                </div>

                                <div class="form-group">
                                    <textarea class="form-control" rows="3" name="description" ref={register({ required: true })} placeholder=" Description"></textarea>
                                </div>
                    
                                <div>
                                    <button type="submit" className="btn-brand">Submit</button>
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