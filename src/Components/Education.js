import React from 'react';
import useFetch from "../hooks/useFetch";
import {experience} from "../apiEndPoint";
import {baseUrl,education} from '../apiEndPoint'

const Education = () => {
    const {loading,error,data} = useFetch(education)
    if (loading)return <p>load...</p>
    if(data)
    return (
        <div className="section education" id="education-section">
            <div className="title">
                Education
                <span className="circle"><i className="icon ion ion-university"></i></span>
            </div>
            <div className="cd-timeline">
                {
                    data.map((val, index) => {
                        return (
                            <>
                                <div className="cd-timeline-block animated">
                                    <div className="cd-timeline-point">
                                        <i className="icon ion ion-ios-checkmark-empty"></i>
                                    </div>
                                    <div className="cd-timeline-content">
                                        <div className="content-box education">
                                            <div className="date">{val.passingYear}</div>
                                            <div className="name">{val.Title}</div>
                                            <div className="category">{val.Institute}</div>
                                            <p>
                                                Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent
                                                mediocritatem an,
                                                cule dicta iriure at. Ubique
                                                maluisset vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex
                                                audire suavitate
                                                has, ei quodsi tacimates
                                                sapientem sed, pri zril ubique ut.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
    else return (<></>)
};

export default Education;