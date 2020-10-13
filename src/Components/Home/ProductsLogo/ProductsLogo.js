import React from 'react';
import './ProductsLogo.css';
import Google from '../../../images/logos/google.png';
import Airbnb from '../../../images/logos/airbnb.png';
import Netflix from '../../../images/logos/netflix.png';
import Slack from '../../../images/logos/slack.png';
import Uber from '../../../images/logos/uber.png';

const ProductsLogo = () => {
    return (
        <section className="container">
            <div className="row mt-5">
                <div className="col-md-2 mr-4">
                    <img className="product-img-size" src={Slack} alt="" />
                </div>
                <div className="col-md-2 mr-4">
                    <img className="product-img-size" src={Google} alt="" />

                </div>
                <div className="col-md-2 mr-4">
                    <img className="product-img-size" src={Uber} alt="" />

                </div>
                <div className="col-md-2 mr-4">
                    <img className="product-img-size" src={Netflix} alt="" />

                </div>
                <div className="col-md-2 mr-4">
                    <img className="product-img-size" src={Airbnb} alt="" />
                </div>
            </div>
        </section>
    );
};

export default ProductsLogo;