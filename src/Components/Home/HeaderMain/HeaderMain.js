import React from 'react';
import Frame from '../../../images/logos/Frame.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
            <main className="container">
                <div style={{ height: '600px' }} className="row d-flex align-items-center">
                <div className="col-md-4 ">
                    <h1>Let's Grow Your <br />Brand To The <br />Next Level</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatem, harum voluptas laborum animi veniam?</p>
                    <button type="button" class="btn-brand" >Hire us</button>
                </div>
                <div className="col-md-6">
                    <img src={Frame} alt="" className="img-fluid" />
                </div>
                </div>

            </main>
    );
};

export default HeaderMain;