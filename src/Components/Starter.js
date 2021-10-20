import React from 'react';
import useFetch from "../hooks/useFetch";
import {baseUrl,starterApi} from '../apiEndPoint'
const Starter = () => {
    const {loading,error,data} = useFetch(starterApi)
    if (loading)return <p>load...</p>
    return (
        <div>
            <div className="section started">
                <div className="st-box">
                    <div className="st-bts">
                        <a href={`mailto:${data.contactEmail}`} className="btn_animated">
                            <span className="circle"><i className="icon ion ion-plus"></i></span>
                        </a>
                    </div>
                    <div className="st-image"><img src={baseUrl+data.profilePhoto.url} alt=""/></div>
                    <div className="st-title">{data.siteName}</div>
                    <div className="st-subtitle">{data.title}</div>
                    <div className="st-soc">
                        {
                            data.socialNetworks.map((sn)=>{
                                return (
                                    <>
                                        <a target="blank" href={sn.url} className="btn_animated">
                                            <span className="circle"><i className={sn.iconClass}></i></span>
                                        </a>
                                    </>
                                    )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Starter;