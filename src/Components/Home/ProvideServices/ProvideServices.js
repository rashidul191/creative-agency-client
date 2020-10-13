import React from 'react';
import './ProvideServices.css';
import Service1 from '../../../images/icons/service1.png';
import Service2 from '../../../images/icons/service2.png';
import Service3 from '../../../images/icons/service3.png';

const ProvideServices = () => {
    return (
        <section className="container">
            <div>
                <div className="text-center pb-5">
                    <h3>Provide awesome <span style={{color:'#7AB259'}}>services</span></h3>
                </div>
                <div>
                    <div class="card-deck">
                        <div class="card card-border mt-3">
                            <img src={Service1} class="card-img-top service-img-size" alt="..." />
                            <div class="card-body text-position">
                                <h5 class="card-title">Web  Mobile design</h5>
                                <p class="card-text text-secondary">We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                            </div>
                        </div>
                        <div class="card card-border mt-3">
                            <img src={Service2} class="card-img-top service-img-size" alt="..." />
                            <div class="card-body text-position">
                                <h5 class="card-title">Graphic Design</h5>
                                <p class="card-text text-secondary">Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>

                            </div>
                        </div>
                        <div class="card card-border mt-3">
                            <img src={Service3} class="card-img-top service-img-size" alt="..." />
                            <div class="card-body ">
                                <h5 class="card-title text-position">Web development</h5>
                                <p class="card-text text-secondary">With well written codes. we build amazing apps for all platforms, mobile and web apps in general.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProvideServices;