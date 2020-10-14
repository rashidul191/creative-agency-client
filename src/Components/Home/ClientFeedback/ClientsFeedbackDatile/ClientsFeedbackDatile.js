import React from 'react';
import './ClientsFeedbackDatile.css';
import Customer1 from '../../../../images/customer-1.png';
import Customer2 from '../../../../images/customer-2.png';
import Customer3 from '../../../../images/customer-3.png';
import { useHistory } from 'react-router-dom';



const ClientsFeedbackDatile = () => {

    const history = useHistory();
    const handleFeedback=() =>{
        history.push("/review");
    }
    return (
        <section>
            <div className="mt-5 pt-5 p">
                <div class="card-deck">
                    <div class="card">
                        <div onClick={handleFeedback} className="row">
                            <div className="col-md-3">
                                <img src={Customer1} class="card-img-top client-img-size" alt="..." />
                            </div>
                            <div className="col-md-9">
                                <h4 class="card-title">Nash Patrik</h4>
                                <h6>CEO, Manpol</h6>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, deserunt dicta. Quam adipisci eius impedit sint doloremque quae dolorum iure.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={Customer2} class="card-img-top client-img-size" alt="..." />
                            </div>
                            <div className="col-md-9">
                                <h4 class="card-title">Miram Barron</h4>
                                <h6>CSE, Manpol</h6>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, deserunt dicta. Quam adipisci eius impedit sint doloremque quae dolorum iure.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={Customer3} class="card-img-top client-img-size" alt="..." />
                            </div>
                            <div className="col-md-9">
                                <h4 class="card-title">Bria Malone</h4>
                                <h6>CEO, Manpol</h6>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, deserunt dicta. Quam adipisci eius impedit sint doloremque quae dolorum iure.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ClientsFeedbackDatile;