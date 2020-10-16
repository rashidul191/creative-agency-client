import React from 'react';
import SiteBar from '../SiteBar/SiteBar';
import ReviewDetails from './ReviewDetails/ReviewDetails';

const Review = () => {


    document.title="Review";

    return (
        <section className="container pt-4">
            <div className="row">
                <div className="col-md-2">
                    <SiteBar></SiteBar>
                </div>
                <div className="col-md-10">
                    <ReviewDetails></ReviewDetails>
                </div>
            </div>
        </section>
    );
};

export default Review;