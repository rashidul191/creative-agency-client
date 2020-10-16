import React from 'react';
import './MakeAdminDetail.css';
import { useForm } from "react-hook-form";
import { useState } from 'react';

const MakeAdminDetail = () => {

    const { register, handleSubmit, errors } = useForm();
    const addAdminSubmit = data => {
        fetch('https://glacial-stream-51727.herokuapp.com/addMakeAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(makeAdmin => {
                if (makeAdmin) {

                    alert("Make Admin Successful.");
                    console.log(data);
                }
            })
    }

    return (
        <section>
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h5>Add Service</h5>
                    </div>
                    <div className="col-md-5 ml-5">
                        <small><h6>Admin</h6></small>
                    </div>
                </div>
                <div className="order-from-body  pt-3">
                    <div className="addService-body-part">
                        <form action="" onSubmit={handleSubmit(addAdminSubmit)}>
                            <div className="row makeAdmin-container pt-2">
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <h6>Email</h6>
                                        <input type="email" class="form-control" name="email" ref={register({ required: true })} placeholder="email@gmail.com" />
                                        {errors.email && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4" >
                                    <ul className="ml-auto">
                                        <button type="submit" className="btn-submit-btn">Submit</button>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAdminDetail;