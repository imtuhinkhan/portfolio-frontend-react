import React from 'react';
import useFetch from "../hooks/useFetch";
import {about, baseUrl, category,projects} from '../apiEndPoint'
const Portolio = () => {
    const cat = useFetch(category)
    const pro = useFetch(projects)
    const categoryList = cat.data
    const projectList = pro.data
    console.log(categoryList)
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
                        { categoryList &&
                            categoryList.map((val,index)=>{
                                return (
                                    <>
                                        <div className="f_btn btn_animated">
                                            <div className="circle">
                                                <label><input type="radio" name="fl_radio" value={"f-"+val.title}/>{val.title}</label>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="row box-items">
                {projectList &&
                projectList.map((val, index) => {
                    return (

                        <div className={`col col-m-12 col-t-6 col-d-4 box-item ${'f-'+val.categories[0].title} animated`}>
                            <div className="image">
                                <a href={"#popup-"+index} className="has-popup"><img src={baseUrl+ val.coverImage.url} alt=""/></a>
                            </div>
                            <div className="content-box">
                                <div className="category">{val.categories[0].title}</div>
                                <a href={"#popup-"+index} className="name has-popup">{val.title}</a>
                                <p>
                                    {val.description}
                                </p>
                            </div>
                            <div id={"popup-"+index} className="popup-box mfp-fade mfp-hide">
                                <div className="content">
                                    <div className="image">
                                        <img src={baseUrl+val.coverImage.url} alt=""/>
                                    </div>
                                    <div className="desc">
                                        <div className="category">{val.categories[0].title}</div>
                                        <h4>  {val.title}</h4>
                                        <p>
                                            {val.description}
                                        </p>
                                        <a href="#" className="btn btn_animated"><span
                                            className="circle">View Project</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }

            </div>
            <div className="clear"></div>
        </div>
    );
};

export default Portolio;