import React from 'react';
import useFetch from "../hooks/useFetch";
import {baseUrl, about, starterApi} from '../apiEndPoint'
const Contact = () => {
    const {loading,error,data} = useFetch(about)
    if (loading)return <p>load...</p>
    if (data)
    return (
        <div className="section contacts" id="contact-section">
            <div className="title">Contact Me</div>
            <div className="row">
                <div className="col col-m-12 col-t-6 col-d-6">
                    <div className="content-box animated">
                        <div className="info-list">
                            <ul>
                                <li><strong><span>Address:</span></strong> {data.Address}
                                </li>
                                <li><strong><span>Phone:</span></strong> {data.Phone}
                                </li>
                                <li><strong><span>E-mail:</span></strong> {data.Email}</li>
                            </ul>
                        </div>
                        {/*<div className="map" id="map"></div>*/}
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

    else return (<></>)
};

export default Contact;