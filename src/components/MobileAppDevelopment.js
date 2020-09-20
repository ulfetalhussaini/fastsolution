import React , {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Picinbanner from "../images/3369656.svg";
import Tickicon from "../images/tick icon.svg";
import Java from "../images/java logo.svg";
import Objective from "../images/objective c logo.svg";
import Swift from "../images/swift logo.svg";
import Kotlin from "../images/kotlin logo.png";

import Fintech from "../images/fintech icon.svg";
import Telecommunication from "../images/telecommunication icon.svg";
import Ecommerce from "../images/ecommerce icon.svg";
import Startup from "../images/startup icon.svg";
import Enterprise from "../images/enterprise icon.svg";
import Logistic from "../images/logistic icon.svg";

import Project from "./Project";
import dataList from "../data/data";
import ModelandDoing from "./ModelandDoing";

var _ = require('lodash');
let list = [];

function MobileAppDevelopment() {

  const [texts] = useState(dataList);

  return (
    <div className="MobileAppDevelopment">
      {/* Header */}
      <div className="MobileAppDevelopment-bg">
        <img src={Picinbanner} className="MobileAppDevelopment-Picbanner" />
        <div className="Text-Header-Banner">Mobile APP DEVELOPMENT</div>
        <div className="Subtext-Header-Banner">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut
        </div>
      </div>

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/fastsolution">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Services</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Mobile App Development
          </li>
        </ol>
      </nav>

      <div className="mobSol">Mobile solutions to suit your needs</div>
      <div className="mobsol-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam.
      </div>

<div className="what-we-do">
      <div className="what-we-do-title">What we do?</div>
      <div className="row hover14 column">
        <div className="col-sm-6 col-lg-6">
          <ul className="ul-padding">
          { _.times(2,() => {
             list.push(<ModelandDoing texts={texts} />)
            })}
          {list}
          </ul>
        </div>
        <div className="col-sm-6 col-lg-6">
          <ul className="ul-padding2">
          { _.times(2,() => {
             list.push(<ModelandDoing texts={texts} />)
            })}
          {list}
          </ul>
        </div>
      </div>
</div>
      {/* TECHNOLOGIES WE USE */}

      <div className="TECHNOLOGIES">
        <p>TECHNOLOGIES WE USE</p>

        <div className="row hover14 column">
          <div className="col-sm-6 col-lg-3">
            <img src={Java} className="" />
            <div className="TECH-divText">
              <div className="TECHNOLOGIES-title">JAVA</div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <img src={Objective} className="" />
            <div className="TECH-divText1">
              <div className="TECHNOLOGIES-title">OBJECTIVE</div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <img src={Swift} />
            <div className="TECH-divText2">
              <div className="TECHNOLOGIES-title">SWIFT</div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <img src={Kotlin} />
            <div className="TECH-divText3">
              <div className="TECHNOLOGIES-title">KOTLIN</div>
            </div>
          </div>
        </div>
      </div>

      {/* INDUSTRIES WE SERVED */}
      <div className="INDUSTRIES">
        <p>INDUSTRIES WE SERVED</p>
        <div className="row hover14 column">
          <div className="col-sm-6 col-lg-4">
            <img src={Fintech} className="" />
            <div className="INDUST-divText">
              <div className="INDUSTRIES-title">FIN-TECH</div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <img src={Telecommunication} className="" />
            <div className="INDUST-divText1">
              <div className="INDUSTRIES-title">TELECOMMUNICATION</div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <img src={Ecommerce} className="" />
            <div className="INDUST-divText2">
              <div className="INDUSTRIES-title">E-COMMERCE</div>
            </div>
          </div>
        </div>

        <div className="row hover14 column">
          <div className="col-sm-6 col-lg-4">
            <img src={Startup} className="" />
            <div className="INDUST-divText3">
              <div className="INDUSTRIES-title">START UPS</div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <img src={Enterprise} className="" />
            <div className="INDUST-divText4">
              <div className="INDUSTRIES-title">ENTERPRISES</div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <img src={Logistic} className="" />
            <div className="INDUST-divText5">
              <div className="INDUSTRIES-title">LOGISTICS</div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED PRODUCTS */}
      <div className="PRODUCTS">
        <p>FEATURED PRODUCTS</p>
        <Project  texts={texts} />
        {/* <div className="PRODUCTS-bg">
          <div className="project-header">FastPay - Mobile Wallet</div>
          <div className="project-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd
          </div>
          <img src={Fastpaylogo} className="Home-Picfastpayproject" />
          <img src={Fastpayillustration} className="Home-Picproject" />
        </div> */}
      </div>
    </div>
  );
}
export default MobileAppDevelopment;
