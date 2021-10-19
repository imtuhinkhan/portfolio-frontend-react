import React from 'react';

const Portolio = () => {
    return (
        <div className="section works" id="works-section">
            <div className="title">Portfolio</div>
            <div className="filter-menu">
                <div className="filters">
                    <div className="btn-group">
                        <div className="f_btn btn_animated active">
                            <div className="circle">
                                <label><input type="radio" name="fl_radio" value="box-item"/>All</label>
                            </div>
                        </div>
                        <div className="f_btn btn_animated">
                            <div className="circle">
                                <label><input type="radio" name="fl_radio" value="f-mockup"/>Mockups</label>
                            </div>
                        </div>
                        <div className="f_btn btn_animated">
                            <div className="circle">
                                <label><input type="radio" name="fl_radio" value="f-graphic"/>Graphics</label>
                            </div>
                        </div>
                        <div className="f_btn btn_animated">
                            <div className="circle">
                                <label><input type="radio" name="fl_radio" value="f-icons"/>Icons</label>
                            </div>
                        </div>
                        <div className="f_btn btn_animated">
                            <div className="circle">
                                <label><input type="radio" name="fl_radio" value="f-ui"/>UI Kits</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row box-items">
                <div className="col col-m-12 col-t-6 col-d-4 box-item f-mockup animated">
                    <div className="image">
                        <a href="#popup-1" className="has-popup"><img src="images/works/work1.jpg" alt=""/></a>
                    </div>
                    <div className="content-box">
                        <div className="category">Mockups</div>
                        <a href="#popup-1" className="name has-popup">Realistic Business Cards MockUp</a>
                        <p>
                            Here’s a new b-cards mock-up with several business cards...
                        </p>
                    </div>
                    <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                        <div className="content">
                            <div className="image">
                                <img src="images/works/work1.jpg" alt=""/>
                            </div>
                            <div className="desc">
                                <div className="category">Mockups</div>
                                <h4>Realistic Business Cards MockUp</h4>
                                <p>
                                    Here’s a new b-cards mock-up with several business cards scattered across the scene.
                                    The PSD file allows you
                                    to easily. Here’s a new b-cards mock-up with several business cards scattered across
                                    the scene.
                                </p>
                                <a href="#" className="btn btn_animated"><span
                                    className="circle">View Project</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-m-12 col-t-6 col-d-4 box-item f-graphic animated">
                    <div className="image">
                        <a href="#popup-2" className="has-popup"><img src="images/works/work3.jpg" alt=""/></a>
                    </div>
                    <div className="content-box">
                        <div className="category">Graphic</div>
                        <a href="#popup-2" className="name has-popup">The Mountainbiker Freebie</a>
                        <p>
                            The freebie of the day is a logo design kit with an original theme...
                        </p>
                    </div>
                    <div id="popup-2" className="popup-box mfp-fade mfp-hide">
                        <div className="content">
                            <div className="image">
                                <img src="images/works/work3.jpg" alt=""/>
                            </div>
                            <div className="desc">
                                <div className="category">Graphic</div>
                                <h4>The Mountainbiker Freebie</h4>
                                <p>
                                    The freebie of the day is a logo design kit with an original theme that will help
                                    you create
                                    stunning mountain bike related logos in just minutes.
                                </p>
                                <a href="#" className="btn btn_animated"><span
                                    className="circle">View Project</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-m-12 col-t-6 col-d-4 box-item f-mockup animated">
                    <div className="image">
                        <a href="#popup-3" className="has-popup"><img src="images/works/work2.jpg" alt=""/></a>
                    </div>
                    <div className="content-box">
                        <div className="category">Mockups</div>
                        <a href="#popup-3" className="name has-popup">Notebook MockUp PSD</a>
                        <p>
                            Today we’re happy to share with you the mockup of a classic...
                        </p>
                    </div>
                    <div id="popup-3" className="popup-box mfp-fade mfp-hide">
                        <div className="content">
                            <div className="image">
                                <img src="images/works/work2.jpg" alt=""/>
                            </div>
                            <div className="desc">
                                <div className="category">Mockups</div>
                                <h4>Notebook MockUp PSD</h4>
                                <p>
                                    Today we’re happy to share with you the mockup of a classic notebook that will help
                                    you showcase your
                                    drawings. Today we’re happy to share with you the mockup of a classic notebook that
                                    will help.
                                </p>
                                <a href="#" className="btn btn_animated"><span
                                    className="circle">View Project</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-m-12 col-t-6 col-d-4 box-item f-icons animated">
                    <div className="image">
                        <a href="#popup-4" className="has-popup"><img src="images/works/work4.jpg" alt=""/></a>
                    </div>
                    <div className="content-box">
                        <div className="category">Icons</div>
                        <a href="#popup-4" className="name has-popup">Capitalist Icons</a>
                        <p>
                            Today we have for you a set of 20 icons available in 2 styles: colored...
                        </p>
                    </div>
                    <div id="popup-4" className="popup-box mfp-fade mfp-hide">
                        <div className="content">
                            <div className="image">
                                <img src="images/works/work4.jpg" alt=""/>
                            </div>
                            <div className="desc">
                                <div className="category">Icons</div>
                                <h4>Capitalist Icons</h4>
                                <p>
                                    Today we have for you a set of 20 icons available in 2 styles: colored flat and line
                                    version,
                                    designed on a 128px grid. These polished icons come in multiple formats so you can
                                    easily include
                                    them in your projects.
                                </p>
                                <a href="#" className="btn btn_animated"><span
                                    className="circle">View Project</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-m-12 col-t-6 col-d-4 box-item f-ui animated">
                    <div className="image">
                        <a href="#popup-5" className="has-popup"><img src="images/works/work5.jpg" alt=""/></a>
                    </div>
                    <div className="content-box">
                        <div className="category">UI Kits</div>
                        <a href="#popup-5" className="name has-popup">Mapogo UI Kit</a>
                        <p>
                            Mapogo is an expertly crafted UI kit perfect for iOS designers...
                        </p>
                    </div>
                    <div id="popup-5" className="popup-box mfp-fade mfp-hide">
                        <div className="content">
                            <div className="image">
                                <img src="images/works/work5.jpg" alt=""/>
                            </div>
                            <div className="desc">
                                <div className="category">UI Kits</div>
                                <h4>Mapogo UI Kit</h4>
                                <p>
                                    Mapogo is an expertly crafted UI kit perfect for iOS designers and developers. The
                                    free sample
                                    includes 10 screens (750×1334 px) that can be easily customized in Photoshop
                                </p>
                                <a href="#" className="btn btn_animated"><span
                                    className="circle">View Project</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-m-12 col-t-6 col-d-4 box-item f-ui animated">
                    <div className="image">
                        <a href="#popup-6" className="has-popup"><img src="images/works/work6.jpg" alt=""/></a>
                    </div>
                    <div className="content-box">
                        <div className="category">UI Kits</div>
                        <a href="#popup-6" className="name has-popup">Chameleon UI Kit</a>
                        <p>
                            The freebie of the day is Chameleon, a modern UI kit perfect to...
                        </p>
                    </div>
                    <div id="popup-6" className="popup-box mfp-fade mfp-hide">
                        <div className="content">
                            <div className="image">
                                <img src="images/works/work6.jpg" alt=""/>
                            </div>
                            <div className="desc">
                                <div className="category">UI Kits</div>
                                <h4>Chameleon UI Kit</h4>
                                <p>
                                    The freebie of the day is Chameleon, a modern UI kit perfect to use for creating a
                                    stylish and
                                    clean mobile app. This kit includes 10 screens from various categories that can be
                                    easily edited.
                                </p>
                                <a href="#" className="btn btn_animated"><span
                                    className="circle">View Project</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clear"></div>
        </div>
    );
};

export default Portolio;