import React from 'react';
import SomeWorksDetail from '../SomeWorksDetail/SomeWorksDetail';
import './SomeWorks.css';

const SomeWorks = () => {
    return (
        <section className="works-container mt-5">
            <div className="container  pt-5">
                <div className=" text-center">
                    <h1 className="text-white" >Here are some of <span style={{ color: '#7AB259' }}>our works</span></h1>
                </div>
                <div>
                    <SomeWorksDetail></SomeWorksDetail>
                </div>
            </div>
        </section>
    );
};

export default SomeWorks;