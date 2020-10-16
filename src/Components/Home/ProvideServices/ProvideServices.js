import React from 'react';
import './ProvideServices.css';
import Service1 from '../../../images/icons/service1.png';
import loadingImg from '../../../images/loading.gif';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const ProvideServices = () => {


    const [serviceInfo, setServiceInfo] = useState([]);

    useEffect(() => {
        fetch('https://glacial-stream-51727.herokuapp.com/serviceByData')
            .then(res => res.json())
            .then(data => setServiceInfo(data))
    }, [])


    const history = useHistory()
    const handleOrder = () => {
        history.push("/userOrder");
    }
    return (
        <section className="container">
            <div >
                <div className=" text-center pb-5">
                    <h3>Provide awesome <span style={{ color: '#7AB259' }}>services</span></h3>
                </div>
                <div>
                    <div class=" card-deck">
                        <div className="row">
                        {
                            serviceInfo.length === 0 && <img className="loadingImg-size" src={loadingImg} alt=""/>
                        }
                            {
                                serviceInfo.map(addService => <div className="col-md-4">
                                    <div onClick={handleOrder} class="card card-border mt-3">
                                        <img src={Service1} class="card-img-top service-img-size" alt="..." />
                                        <div class="card-body text-position">
                                            <h5 class="card-title">{addService.name}</h5>
                                            <p class="card-text text-secondary">{addService.description}</p>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default ProvideServices;