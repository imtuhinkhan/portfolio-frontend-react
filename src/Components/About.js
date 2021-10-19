import React from 'react';

const About = () => {
    return (
        <div className="section about" id="about-section">
            <div className="content-box">
                <div className="row">
                    <div className="col col-m-12 col-t-5 col-d-5">
                        <div className="info-list">
                            <ul>
                                <li><strong><span>Age:</span></strong> 22 Years</li>
                                <li><strong><span>Job:</span></strong> Freelancer</li>
                                <li><strong><span>Citizenship:</span></strong> United States</li>
                                <li><strong><span>Address:</span></strong> 358 W Jefferson St, Bensenville, IL 60112
                                </li>
                                <li><strong><span>Phone:</span></strong> <a href="tel:12562548456">+1 256 254 84 56</a>
                                </li>
                                <li><strong><span>E-mail:</span></strong> <a
                                    href="mailto:smorgan@domain.com">smorgan@domain.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-m-12 col-t-7 col-d-7">
                        <div className="text-box">
                            <p><strong>Hello! I’m Steve Morgan</strong></p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                explicabo. Nemo enim ipsam
                                voluptatem quia voluptas sit aspernatur aut odit aut fugit. Sed ut perspiciatis unde
                                omnis iste natus error sit
                                voluptatem accusantium doloremque.
                            </p>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores.
                            </p>
                        </div>
                        <div className="bts">
                            <a href="#" className="btn btn_animated"><span className="circle">Download CV</span></a>
                            <a href="#" className="btn extra contact-btn btn_animated"><span className="circle">Contact Me</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;