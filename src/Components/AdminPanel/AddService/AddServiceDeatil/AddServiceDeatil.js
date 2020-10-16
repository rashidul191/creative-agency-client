import React from 'react';
import './AddServiceDeatil.css';
import { useForm } from "react-hook-form";
import { useState } from 'react';


const AddServiceDeatil = () => {

    const { register, handleSubmit, errors } = useForm();

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleServiceSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    
                    alert("Add Services Successful.");
                   
                }
            })
            .catch(error => {
                console.error(error)
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
                    <div className="addService-body-1">
                        <form onSubmit={handleServiceSubmit} action="">
                            <div className="addService-container">
                                <div className="row addService-body">
                                    <div className="col-md-6 body3">
                                        <div class="form-group">
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1"><h6>Service Title</h6></label>
                                                <input onBlur={handleBlur} type="text" class="form-control" ref={register({ required: true })} name="name" placeholder="Enter title" />
                                                {errors.name && <span className="text-danger">This field is required</span>}

                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlTextarea1" ><h6>Description</h6></label>
                                            <textarea onBlur={handleBlur} class="form-control" name="description" ref={register({ required: true })} rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-6 body4">
                                        <div class="form-group">
                                            <label for="exampleFormControlFile1">Icon</label>
                                            <input onChange={handleFileChange} type="file" name="file" ref={register({ required: true })} class="form-control-file " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <ul className="ml-auto">
                                    <button type="submit" className="btn-submit">Submit</button>
                                </ul>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AddServiceDeatil;