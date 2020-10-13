import React from 'react';
import ClientsFeedbackDatile from '../ClientsFeedbackDatile/ClientsFeedbackDatile';

const ClientsFeedback = () => {
    return (
        <section className="container pb-5">
            <div className="mt-5">
                <div className="pt-5 text-center">
                    <h3>Clients <span style={{ color: '#7AB259' }}>Feedback</span></h3>
                </div>
                <div>
                    <ClientsFeedbackDatile></ClientsFeedbackDatile>
                </div>
            </div>
        </section>
    );
};

export default ClientsFeedback;