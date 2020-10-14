import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Navbar.css';


const Navbar = () => {
    return (
        <section className="">
            <div className="container">
              
                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <div>
                            <a class="navbar-brand " >
                                <Link  to="/"> <img className="logo-style" src={logo} alt="" /> </Link>
                                </a>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link active mr-3" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active mr-3" href="#">Our Portfolio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active mr-3" href="#">Our Team</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active mr-3" href="#" >Contact Us</a>
                                </li>
                                <li class="nav-item">
                                    <Link to="login"><button type="button" class="btn-brand mr-3">Login</button></Link>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>            
        </section>
    );
};

export default Navbar;