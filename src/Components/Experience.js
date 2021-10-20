import React from 'react';
import {baseUrl,experience} from '../apiEndPoint'
import useFetch from "../hooks/useFetch";
const Experience = () => {
    const {loading,error,data} = useFetch(experience)
    if (loading)return <p>load...</p>
    const totalSkill = data.length
    if(data)
    return (
        <div>
            <div className="section experience" id="experience-section">
                <div className="title">
                    Experience
                    <span className="circle"><i className="icon ion ion-ios-briefcase"></i></span>
                </div>
                <div className="cd-timeline">
                    {
                        data.map((val,index)=>{
                            return(
                                <>
                                    <div className="cd-timeline-block animated">
                                        <div className="cd-timeline-point">
                                            <i className="icon ion ion-ios-checkmark-empty"></i>
                                        </div>
                                        <div className="cd-timeline-content">
                                            <div className="content-box">
                                                <div className="date" >{val.Duration}</div>
                                                <div className="name">{val.ComapnyName}</div>
                                                <div className="category">{val.Designation}</div>
                                                {/*<p>*/}
                                                {/*    Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem*/}
                                                {/*    an, cule dicta iriure at. Ubique*/}
                                                {/*    maluisset vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire*/}
                                                {/*    suavitate has, ei quodsi tacimates*/}
                                                {/*    sapientem sed, pri zril ubique ut. Lorem ipsum dolor sit amet, in quodsi.*/}
                                                {/*</p>*/}
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
    else return (<></>)
};

export default Experience;