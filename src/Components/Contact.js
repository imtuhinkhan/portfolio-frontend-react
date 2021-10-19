import React from 'react';

const Contact = () => {
    return (
        <div className="section contacts" id="contact-section">
            <div className="title">Contact Me</div>
            <div className="row">
                <div className="col col-m-12 col-t-6 col-d-6">
                    <div className="content-box animated">
                        <div className="info-list">
                            <ul>
                                <li><strong><span>Address:</span></strong> 358 W Jefferson St, Bensenville, IL 60112
                                </li>
                                <li><strong><span>Phone:</span></strong> <a href="tel:12562548456">+1 256 254 84 56</a>
                                </li>
                                <li><strong><span>E-mail:</span></strong> <a
                                    href="mailto:smorgan@domain.com">smorgan@domain.com</a></li>
                            </ul>
                        </div>
                        <div className="map" id="map"></div>
                    </div>
                </div>
                <div className="col col-m-12 col-t-6 col-d-6">
                    <div className="content-box animated">
                        <h4>Write a message:</h4>
                        <div className="contact-form">
                            <form id="cform" method="post">
                                <div className="group-val">
                                    <input type="text" name="name" placeholder="Your Name"/>
                                </div>
                                <div className="group-val">
                                    <input type="text" name="email" placeholder="Your Email"/>
                                </div>
                                <div className="group-val">
                                    <input type="text" name="subject" placeholder="Subject"/>
                                </div>
                                <div className="group-val ct-gr">
                                    <textarea name="message" placeholder="Message"></textarea>
                                </div>
                                <a href="#" className="btn btn_animated"
                                   onClick="$('#cform').submit(); return false;"><span
                                    className="circle">Send Message</span></a>
                            </form>
                            <div className="alert-success">
                                <p>Thanks, your message is sent successfully. We will contact you shortly!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;