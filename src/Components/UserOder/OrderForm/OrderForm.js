import React, { useContext } from 'react';
import './OrderForm.css';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
// import { useEffect } from 'react';

const OrderForm = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory()

    const { register, handleSubmit, errors } = useForm();

    // const [userInfo, setUserInfo] = useState([]);

    const onSubmit = data => {

        fetch('https://glacial-stream-51727.herokuapp.com/addUserDetails', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    history.push("/servicesList")
                    alert("Your Order Successful.");
                    // console.log(data);
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
                        <small><h6>{loggedInUser.name}</h6></small>
                    </div>
                </div>
                <div className="order-from-body">
                    <div className="pt-1">
                        <div className="order-from">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-group">
                                    <input type="text" class="form-control" ref={register({ required: true })} name="name" placeholder="Your name / company's name" />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>

                                <div class="form-group">
                                    <input type="email" ref={register({ required: true })} class="form-control" name="email" placeholder="Your email address" />
                                    {errors.email && <span className="text-danger">This field is required</span>}
                                </div>

                                <div class="form-group">
                                    <input type="text" name="topic" class="form-control" ref={register({ required: true })} placeholder="Graphic Design" />
                                    {errors.topic && <span className="text-danger">This field is required</span>}
                                </div>

                                <div class="form-group">
                                    <textarea class="form-control" rows="3" name="projectDetails" ref={register({ required: true })} placeholder="Project Details"></textarea>
                                </div>
                                <div className="row">
                                    <div class="form-group col-md-4">
                                        <input type="text" class="form-control" ref={register({ required: true })} name="prices" placeholder="Prices" />
                                        {errors.prices && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group col-md-8">
                                        <input type="file" class="form-control-file" ref={register({ required: true })} name="picture" />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="btn-brand">Send</button>

                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
            <div>
                {/* {
                    userInfo.map( userDetails => <AdminServiceListDetail name = {userDetails.name} email = {userDetails.email} topic = {userDetails.topic} projectDetails = {userDetails.projectDetails}></AdminServiceListDetail>)
                } */}

            </div>
        </section>
    );
};

export default OrderForm;