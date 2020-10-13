import React from 'react';
import FooterForm from './FooterForm/FooterForm';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer-container mt-5">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Let us handle your <br />project, professionally.</h1>
                        <br />
                        <p className="text-secondary">With well written codes, we build amazing apps for all <br /> platforms, mobile and we apps in general.</p>
                    </div>
                    <div className="col-md-6">
                        <FooterForm></FooterForm>
                    </div>
                </div>
                <p className="text-center mt-5 pt-5">copyright Orange labs {(new Date()).getFullYear()}</p>
            </div>
        </section>
    );
};

export default Footer;