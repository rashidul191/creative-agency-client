import React from 'react';
import logo from '../../../images/logos/logo.png';
import './Navbar.css';


const Navbar = () => {
    return (
        <section>
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <div>
                        <a class="navbar-brand " href="#"><img className="logo-style" src={logo} alt="" /></a>
                    </div>
                    <div class="collapse navbar-collapse mr-auto" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active mr-5" href="#">Home</a>
                            <a class="nav-link active mr-5" href="#">Our Portfolio</a>
                            <a class="nav-link active mr-5" href="#">Our Team</a>
                            <a class="nav-link active mr-5" href="#" >Contact Us</a>
                            <button type="button" class="btn-brand mr-5">Login</button>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;