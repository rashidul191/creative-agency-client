import React from 'react';
import './Login.css';
import logo from '../../images/logos/logo.png';
import googleImg from '../../images/icons/google.jpg';
import { Link, useHistory, useLocation } from 'react-router-dom';

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';


firebase.initializeApp(firebaseConfig);

const Login = () => {

    document.title="Login";

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo:'',
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogle = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const { displayName,  photoUrl, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoUrl,
                   
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
                console.log(result);

            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);

            });
    }


    return (
        <section className="container  mt-5 pt-5">
            <div className="text-center  ">
                <div className="pb-4">
                   <Link to="/"> <img className="login-logo-size" src={logo} alt="" /> </Link>
                </div>
                <div>
                    <div className="login-body">
                        <div className="login-border">
                            <div className="login-body-in-part">
                                <h4>Login With</h4>
                                <button type="button"
                                    onClick={handleGoogle} className="btn-login-btn">
                                    <img className="google-icon" src={googleImg} alt="" />
                                      Continue with Google
                                      </button>
                                <p>Don't have an account? <Link to="/login">Create an account</Link></p>

                            </div>

                        </div>
                        {
                            user.isSignedIn && <div>
                                <p className="login-success-text">Login done</p>
                                {/* <p>Welcome, {user.name}</p>
                            <p>Email, {user.email}</p>
                            <img src={user.photo} alt=""/> */}
                            </div>

                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;