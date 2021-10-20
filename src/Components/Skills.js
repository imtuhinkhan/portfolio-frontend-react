import React from 'react';
import useFetch from "../hooks/useFetch";
import {baseUrl,skill} from '../apiEndPoint'

const Skills = () => {
    const {loading,error,data} = useFetch(skill)
    if (loading)return <p>load...</p>
    const totalSkill = data.length
    if (data)
    return (
        <div className="section skills" id="skills-section">
            <div className="title">Skills</div>
            <div className="row">
                <div className="col col-m-12 col-t-12 col-d-12">
                    <div className="content-box animated">
                        <div className="i_title">
                            <div className="icon"><i className="icon ion ion-code"></i></div>
                            <div className="name">{'Working Experience with'}</div>
                        </div>
                        <div className={'row'} style={{textAlign:'center'}}>
                            {
                                data.map((val,index)=>{
                                    return (
                                        <div className="skills col col-m-6 col-t-2 col-d-2">
                                            <ul>
                                                <li>
                                                    <div className="name">{val.Title}</div>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    else return (<></>)
};

export default Skills;