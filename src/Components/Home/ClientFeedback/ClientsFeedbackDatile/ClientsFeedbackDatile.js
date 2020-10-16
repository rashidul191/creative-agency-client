import React from 'react';
import './ClientsFeedbackDatile.css';
import profile from '../../../../images/profile-icon.png';
import loadingImg from '../../../../images/loading.gif';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';



const ClientsFeedbackDatile = () => {

    const [reviewInfo, setReviewInfo] = useState([]);

    useEffect(() => {
        fetch('https://glacial-stream-51727.herokuapp.com/reviewByData')
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
                    <div className="row">
                        {
                            reviewInfo.length === 0 && <img className="loadingImg-size" src={loadingImg} alt=""/>
                        }
                        {
                            reviewInfo.map(review => <div className="col-md-4">
                                <div class="card row">
                                    <div onClick={handleFeedback} className="row">
                                        <div className="col-md-3">
                                            <img src={profile} class="card-img-top client-img-size" alt="..." />
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