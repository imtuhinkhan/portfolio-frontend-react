import React from 'react';

const Header = () => {
    return (
        <>
        <div class="preloader">
            <div class="centrize full-width">
                <div class="vertical-center">
                    <div class="spinner">
                        <div class="double-bounce1"></div>
                        <div class="double-bounce2"></div>
                    </div>
                </div>
            </div>
        </div>

            <div class="started-bg">
                <div id="particles-bg" class="slide" ></div>
            </div>

            <header>
                <div class="top-menu">
                    <ul>
                        <li class="active">
                            <a class="btn_animated" href="#home-section"><span class="circle">Home</span></a>
                        </li>
                        <li>
                            <a class="btn_animated" href="#about-section"><span class="circle">About</span></a>
                        </li>
                        <li>
                            <a class="btn_animated" href="#skills-section"><span class="circle">Skills</span></a>
                        </li>
                        <li>
                            <a class="btn_animated" href="#experience-section"><span class="circle">Experience</span></a>
                        </li>
                        <li>
                            <a class="btn_animated" href="#education-section"><span class="circle">Education</span></a>
                        </li>
                        <li>
                            <a class="btn_animated" href="#works-section"><span class="circle">Portfolio</span></a>
                        </li>
                        <li>
                            <a class="btn_animated" href="#contact-section"><span class="circle">Contact Me</span></a>
                        </li>
                    </ul>
                    <a href="#" class="menu-btn"><span></span></a>
                </div>
            </header>
            </>
    );
};

export default Header;