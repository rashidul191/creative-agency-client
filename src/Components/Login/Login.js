import React from 'react';
import './Login.css';
import logo from '../../images/logos/logo.png';
import googleImg from '../../images/icons/google.jpg';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleGoogle = () => {
        console.log("click done");
    }


    return (
        <section className="container  mt-5 pt-5">
            <div className="text-center  ">
                <div className="pb-4">
                    <img className="login-logo-size" src={logo} alt="" />
                </div>
                <div>
                    <div className="login-body">
                        <div className="login-border">
                            <div className="login-body-in-part">
                                <h4>Login With</h4>
                                <button type="button" className="btn-login-btn"> <img className="google-icon" src={googleImg} alt="" /> Continue with Google</button>
                                <p>Don't have an account? <Link to="/login">Create an account</Link></p>
                           </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;