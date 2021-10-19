import React from 'react';

const Starter = () => {
    return (
        <div>
            <div className="section started">
                <div className="st-box">
                    <div className="st-bts">
                        <a href="mailto:smorgan@domain.com" className="btn_animated">
                            <span className="circle"><i className="icon ion ion-plus"></i></span>
                        </a>
                    </div>
                    <div className="st-image"><img src="images/man.png" alt=""/></div>
                    <div className="st-title">Steve Morgan</div>
                    <div className="st-subtitle">UX/UI Designer & Front-end Developer</div>
                    <div className="st-soc">
                        <a target="blank" href="https://www.facebook.com/" className="btn_animated">
                            <span className="circle"><i className="icon ion ion-social-facebook"></i></span>
                        </a>
                        <a target="blank" href="https://github.com/" className="btn_animated">
                            <span className="circle"><i className="icon ion ion-social-github"></i></span>
                        </a>
                        <a target="blank" href="https://twitter.com/" className="btn_animated">
                            <span className="circle"><i className="icon ion ion-social-twitter"></i></span>
                        </a>
                        <a href="skype:smorgan" className="btn_animated">
                            <span className="circle"><i className="icon ion ion-social-skype"></i></span>
                        </a>
                        <a target="blank" href="https://plus.google.com/" className="btn_animated">
                            <span className="circle"><i className="icon ion ion-social-googleplus"></i></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Starter;