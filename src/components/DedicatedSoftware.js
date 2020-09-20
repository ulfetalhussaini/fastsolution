import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tickicon from "../images/tick icon.svg";
import Group from "../images/Group 9763.svg";
import Versatility from "../images/versatility.svg";
import Speed from "../images/speed.svg";
import Continuity from "../images/continuity.svg";
import Efficiency from "../images/efficiency.svg";
import Dedication from "../images/dedication.svg";
import Support from "../images/support.svg";
import Nexticon from "../images/next icon.svg";

import Project from "./Project";
import dataList from "../data/data";
import ModelandDoing from "./ModelandDoing";

var _ = require('lodash');
let list = [];

function DedicatedSoftware() {
  const [texts] = useState(dataList);

  return (
    <div className="DedicatedSoftware">
      {/* Header */}
      <div className="MobileAppDevelopment-bg">
        <img src={Group} className="DedicatedSoftware-Picbanner" />
        <div className="Text-Header-Banner">
          Dedicated Software Development Teams
        </div>
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
            Dedicated Software Development Teams
          </li>
        </ol>
      </nav>

      {/* Dedicated Team */}

<div>
      <div className="mobSol">A Dedicated Team Just For You</div>
      <div className="mobsol-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam.
      </div>
</div>

     {/* Model Ideal */}
     <div className="ModelIdea">
      <div className="model-ideal-title">This model is ideal if you:</div>
      <div className="row hover14 column">
        <div className="col-sm-6 col-lg-6">
          <ul className="ul-padding">
          { _.times(2,() => {
             list.push(<span className=""><ModelandDoing texts={texts} /></span>)
            })}
          {list}
          </ul>
        </div>
        <div className="col-sm-6 col-lg-6">
          <ul className="ul-padding2">
          { _.times(2,() => {
             list.push(<span className=""><ModelandDoing texts={texts} /></span>)
            })}
          {list}
          </ul>
        </div>
      </div>
     </div>
      {/*ADVANTAGES*/}
      <div className="ADVANTAGES">
        <p>ADVANTAGES OF A FASTSOLUTION DEDICATED TEAM</p>
        <div className="row hover14 column">
          <div className="col-sm-6 col-lg-4">
            <img src={Versatility} className="adv-img" />
            <div className="adv-name">Versatility</div>
            <div className="adv-position">
              Brings together people with various qualifications and
              specializations.
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <img src={Speed} className="adv-img" />
            <div className="adv-name">Speed</div>
            <div className="adv-position">
              The core team is assembled and trained quickly – often ready to
              start work in 2-3 weeks!
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <img src={Continuity} className="adv-img" />
            <div className="adv-name">Continuity</div>
            <div className="adv-position">
              Integrated with your internal teams and infrastructure.
            </div>
          </div>
        </div>

        <div className="row hover14 column">
          <div className="col-sm-6 col-lg-4">
            <img src={Efficiency} className="adv-img" />
            <div className="adv-name">Efficiency</div>
            <div className="adv-position">
              As the team grows it achieves maximum productivity with the right
              size, knowledge and skills.
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <img src={Dedication} className="adv-img" />
            <div className="adv-name">Dedication</div>
            <div className="adv-position">
              The same team of people (yes, you’re going to know their names)
              working only on your project.
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <img src={Support} className="adv-img" />
            <div className="adv-name">24/7 Support</div>
            <div className="adv-position">
              You can get supports from anytime, anywhere.
            </div>
          </div>
        </div>
      </div>

      {/* HOW THIS WORKS */}
      <div className="Works">
        <p>HOW THIS WORKS?</p>
        <div className="row hover14 column">
          <div className="col-sm-6 col-lg-3">
            <img src={Nexticon} className="Works-img" />
            <div className="adv-name">Preparation</div>
            <div className="adv-position">
              Identify competency, qualification requirements, and plan team
              size and structure.
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <img src={Nexticon} className="Works-img" />
            <div className="adv-name">Preparation</div>
            <div className="adv-position">
              Identify competency, qualification requirements, and plan team
              size and structure.
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <img src={Nexticon} className="Works-img" />
            <div className="adv-name">Preparation</div>
            <div className="adv-position">
              Identify competency, qualification requirements, and plan team
              size and structure.
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <img src={Nexticon} className="Works-img" />
            <div className="adv-name">Preparation</div>
            <div className="adv-position">
              Identify competency, qualification requirements, and plan team
              size and structure.
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED PRODUCTS */}
      <div className="PRODUCTS">
        <p className="title-helps">
          See How DT Helps Clients Across Different Industries
        </p>
        <Project texts={texts} />
      </div>
    </div>
  );
}
export default DedicatedSoftware;
