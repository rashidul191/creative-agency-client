import React from 'react';
import './FooterForm.css';

const FooterForm = () => {
    return (
        <section>
            <div>
                <form>
                    <div class="form-group">

                        <input type="email" class="form-control" placeholder="Your email address" />
                    </div>
                    <div class="form-group">

                        <input type="text" class="form-control" placeholder="Your name / company's name" />
                    </div>

                    <div class="form-group">
                        <textarea class="form-control" placeholder="Your message" rows="8"></textarea>
                    </div>
                    <div>
                        <button type="button" className="btn-brand">Send</button>
                    </div>
                </form>

            </div>
        </section>
    );
};

export default FooterForm;