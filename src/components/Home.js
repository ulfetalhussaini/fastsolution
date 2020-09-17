import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Picinbanner from "../images/18907.svg";

import Mobilewallet from "../images/mobile wallet.svg";
import Ecommerce from "../images/e-commerce.svg";
import Logistics from "../images/logistics.svg";
import Mobileapp from "../images/mobile app.svg";
import Webappdevelopment from "../images/web app development.svg";
import Cloudinterface from "../images/cloud interface.svg";

const Home = () => {
    return (
      <div className="">

        <div className="Home-header">
        <img src={Picinbanner} className="Home-Picbanner" />
        <div className="Text-Header-Banner">Transforming Business Using Technology</div>
        <div className="Subtext-Header-Banner">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et </div>
        <button type="button" className="btn explore-button">EXPLORE</button>
        <button type="button" className="btn contactus-button">CONTACT US</button>
        </div>

        <div className="Home-services">
        <div className="Text-Home-services">SERVICES</div>
        <div className="Subtext-Home-services">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</div>
        <div className="Home-services-div">
        <div className="row text-right hover14 column">
            <div className="col-sm-6 col-lg-4 services-square">
                <img src={Mobilewallet} className="" />
            </div>
            <div className="col-sm-6 col-lg-4 services-square">
            <img src={Ecommerce} className="" />
            </div>
            <div className="col-sm-6 col-lg-4 services-square">
            <img src={Logistics} className="" />
            </div>
        </div>
        <div className="row text-right hover14 column">
            <div className="col-sm-6 col-lg-4 services-square">
            <img src={Mobileapp} className="" />
            </div>
            <div className="col-sm-6 col-lg-4 services-square">
            <img src={Webappdevelopment} className="" />
            </div>
            <div className="col-sm-6 col-lg-4 services-square">
            <img src={Cloudinterface} className="" />
            </div>
        </div>
        </div>
        </div>


    </div>
    )

    }  
export default Home;