import React from 'react';
import Header from "./Header";
import Starter from "./Starter";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Portolio from "./Portolio";
import Contact from "./Contact";
import Footer from "./Footer";

const Main = () => {
    return (
        <>

            <Header/>
            <div className="container">
                <Starter/>
                <div className="wrapper">
                    <About/>
                    <Skills/>
                    <Experience/>
                    <Education/>
                    <Portolio/>
                    <Contact/>
                    <Footer/>
                </div>
            </div>

        </>
    );
};

export default Main;