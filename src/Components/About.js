import React from 'react';
import ReactMarkdown from "react-markdown";
import useFetch from "../hooks/useFetch";
import {baseUrl, about, starterApi} from '../apiEndPoint'


const About = () => {

    const {loading,error,data} = useFetch(about)
    if (loading)return <p>load...</p>
    if (data)
    return (
        <div className="section about" id="about-section">
            <div className="content-box">
                <div className="row">
                    <div className="col col-m-12 col-t-5 col-d-5">
                        <div className="info-list">
                            <ul>
                                <li><strong><span>Company:</span></strong> {data.CompanyName}</li>
                                <li><strong><span>Designation:</span></strong> {data.Designation}</li>
                                <li><strong><span>Address:</span></strong> {data.Address}
                                </li>
                                <li><strong><span>Phone:</span></strong> <a href="tel:12562548456">+88 {data.Phone}</a>
                                </li>
                                <li><strong><span>E-mail:</span></strong> <a
                                    href={`mailto:${data.Email}`}>{data.Email}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-m-12 col-t-7 col-d-7">
                        <div className="text-box">
                            {data.About}
                                <ReactMarkdown source={data.About}  escapeHtml={false}/>
                        </div>
                        <div className="bts">
                            <a href={baseUrl+'/uploads/tuhin_khan_cv_37a42ef97e.pdf'} className="btn btn_animated" download><span className="circle">Download CV</span></a>
                            <a href="#" className="btn extra contact-btn btn_animated"><span className="circle">Contact Me</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    else
        return (
            <></>
        )
};

export default About;