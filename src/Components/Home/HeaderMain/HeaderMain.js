import React from 'react';
import Frame from '../../../images/logos/Frame.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <section className="component">
            <div className="row ">
                <div className="col-md-6 mt-5">
                    <div className="mt-5">
                        <h1>Let's Grow Your <br />Brand To The <br />Next Level</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatem, harum voluptas laborum animi veniam?</p>
                        <button class="btn btn-dark" >Hire us</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-style" src={Frame} alt="" />
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;