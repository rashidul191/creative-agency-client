import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { Link,  } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Navbar.css';


const Navbar = () => {


    return (
        <section className="">
            <div className="container">
                

                <nav class="navbar navbar-expand-lg navbar-light ">
                    <div>
                        <a class="navbar-brand " >
                            <Link to="/"> <img className="logo-style" src={logo} alt="" /> </Link>
                        </a>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link to="/"><a class="nav-link active mr-3">Home</a></Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active mr-3" >Our Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active mr-3">Our Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active mr-3" >Contact Us</a>
                            </li>
                            <div>
                                <li class="nav-item">
                                   <Link to="/login"><button type="button" class="btn-brand mr-3">Login</button></Link> 
                                </li>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;