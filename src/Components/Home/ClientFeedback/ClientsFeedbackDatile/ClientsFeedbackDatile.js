import React from 'react';
import './ClientsFeedbackDatile.css';
import Customer1 from '../../../../images/customer-1.png';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';



const ClientsFeedbackDatile = () => {

    const [reviewInfo, setReviewInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviewByData')
            .then(res => res.json())
            .then(data => setReviewInfo(data))
    }, [])


    const history = useHistory();
    const handleFeedback = () => {
        history.push("/review");
    }
    return (
        <section>
            <div className="mt-5 pt-5 p">
                <div class="card-deck">
                    <div>
                        {
                            reviewInfo.map(review => <div>
                                <div class="card row">
                                    <div onClick={handleFeedback} className="row">
                                        <div className="col-md-3">
                                            <img src={Customer1} class="card-img-top client-img-size" alt="..." />
                                        </div>
                                        <div className="col-md-9">
                                            <h5 class="card-title">{review.name}</h5>
                                            <h6>{review.companyName}</h6>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <p class="card-text">{review.description}</p>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                   
                </div>

            </div>
        </section>
    );
};

export default ClientsFeedbackDatile;