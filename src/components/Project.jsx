import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Fastpayillustration from "../images/fastpay illustration.svg";
import Fastpaylogo from "../images/main_logo.png";

const Project = (props) => {
    return(
    <div className="Home-project-bg">             
                   {props.texts.map(text => {
                        const {id, title, description} = text;
                        return(
                            <div key={id}>
                                <div className="project-header">{title}</div>
                                <div className="project-text">{description}</div>
                                <img src={Fastpaylogo} className="Home-Picfastpayproject" />
                                <img src={Fastpayillustration} className="Home-Picproject" />
                            </div>
                                )})
                    }              
    </div>
    )
}
export default Project;