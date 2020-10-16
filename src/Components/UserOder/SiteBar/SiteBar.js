import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faPlus, faShoppingCart, faTaxi, faUsers } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';
import { useState } from 'react';
import { useEffect } from 'react';



const SiteBar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() =>{
        fetch('https://glacial-stream-51727.herokuapp.com/isAdmin',{
            method:'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
    },[])

    return (
        <section>
            <div className="mb-5">
                <Link to="/"><img className="logo-style" src={logo} alt="" /></Link>
            </div>
            <div className="">
                <Link to="/userOrder">  <FontAwesomeIcon icon={faShoppingCart} /> Order </Link><br />
                <Link to="/servicesList"><FontAwesomeIcon icon={faTaxi} /> Service list  </Link><br />
                <Link to="/review"> <FontAwesomeIcon icon={faCommentDots} /> Review </Link><br />
            </div>
            {  isAdmin && <div>
                <div className="">
                    <Link to="/adminServiceList"> <FontAwesomeIcon icon={faTaxi} /> Service list</Link><br />
                    <Link to="/addService"><FontAwesomeIcon icon={faPlus} /> Add Service</Link><br />
                    <Link to="/makeAdmin"><FontAwesomeIcon icon={faUsers} /> Make Admin</Link><br />
                </div>
            </div>}
        </section>
    );
};

export default SiteBar;