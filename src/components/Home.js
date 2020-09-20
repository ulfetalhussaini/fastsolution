import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Picinbanner from "../images/18907.svg";
import Project from "./Project";

import Mobilewallet from "../images/mobile wallet.svg";
import Ecommerce from "../images/e-commerce.svg";
import Logistics from "../images/logistics.svg";
import Mobileapp from "../images/mobile app.svg";
import Webappdevelopment from "../images/web app development.svg";
import Cloudinterface from "../images/cloud interface.svg";

import Empathize from "../images/empathize.svg";
import Ideate from "../images/ideate.svg";
import Prototype from "../images/prototype.svg";
import Define from "../images/DEFINE.svg";
import Testing from "../images/testing.svg";

import Client from "../images/client.png"
import MobileAppDevelopment from "./MobileAppDevelopment";
import DedicatedSoftware from "./DedicatedSoftware";
import { Switch, Route, Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import TWITTER from "../images/TWITTER.png";
import Yahoo from "../images/Yahoo_Mother_2020_Desktop-01.png";
import Google from "../images/googlelogo_color_272x92dp.png";

import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import dataList from "../data/data";

SwiperCore.use([Navigation, Pagination, A11y]);

const Home = () => {

     const [texts] = useState(dataList);

    const slides=[];
    for(let i=0; i<3; i++){
        slides.push(
            <SwiperSlide key={`slide-${i}`} >
                <img src={Google}  className="img-client-slider"/>
                <img src={Yahoo}  className="img-client-slider"/>     
                <img src={TWITTER}  className="img-client-slider"/>

            </SwiperSlide>
        )
    }

    return (
      <div className="">
        {/* Header */}
        <div className="Home-header">
        <img src={Picinbanner} className="Home-Picbanner" />
        <div className="Text-Header-Banner">Transforming Business Using Technology</div>
        <div className="Subtext-Header-Banner">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et </div>
        <button type="button" className="btn explore-button">EXPLORE</button>
        <button type="button" className="btn contactus-button">CONTACT US</button>
        </div>

        {/* Services */}
        <div className="Home-services">
        <div className="Text-Home-services">SERVICES</div>
        <div className="Subtext-Home-services">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</div>
        <div className="Home-services-div">
        <div className="row text-right hover14 column">
            <div className="col-sm-6 col-lg-4 services-square">
            <img src={Mobilewallet} />
            <br/>
            <Link to={"/"} className="Link-service">Mobile Wallet</Link>
            </div>
            <div className="col-sm-6 col-lg-4 services-square">
            <img src={Ecommerce} />
            <br/>
            <Link to={"/"} className="Link-service">E-commerce Solution</Link>
            </div>
            <div className="col-sm-6 col-lg-4 services-square">
            <img src={Logistics} />
            <br/>
            <Link to={"/"} className="Link-service">Logistics Solution</Link>
            </div>
        </div>
        <div className="row text-right hover14 column">
            <div className="col-sm-6 col-lg-4 services-square">
            <img src={Mobileapp} />
            <br/>
            <Link to={"/services/mobile-app-development"} className="Link-service">Mobile App Development</Link>
            </div>
            <div className="col-sm-6 col-lg-4 services-square">
            <img src={Webappdevelopment} />
            <br/>
            <Link to={"/"} className="Link-service">Web App Development</Link>
            </div>
            <div className="col-sm-6 col-lg-4 services-square">
            <img src={Cloudinterface} />
            <br/>
            <Link to={"/"} className="Link-service">Cloud Consultancy</Link>
            </div>
        </div>
        </div>
        </div>

        {/* How WE Work */}
        <div className="Home-work">
        <p>HOW WE WORK</p>
        <div className="row text-right hover14 column">
            <div className="col-sm-6 col-lg-2 work">
            <img src={Empathize} className="workImg" />
            <div className="work-divText">
            <div className="work-header">EMPATHIZE</div>
            <div className="work-text">Understand the user's needs and problems</div>
            </div>
            </div>
            <div className="col-sm-6 col-lg-2 work">
            <img src={Define} className="workImg"/>
            <div className="work-divText1">
            <div className="work-header">DEFINE</div>
            <div className="work-text">Analyze your observations to define the problem</div>
            </div>
            </div>
            <div className="col-sm-6 col-lg-2 work">
            <img src={Ideate} />
            <div className="work-divText2">
            <div className="work-header">IDEATE</div>
            <div className="work-text">Think of solutions to each aspect of the problem</div>
            </div>
            </div>
            <div className="col-sm-6 col-lg-2 work">
            <img src={Prototype} />
            <div className="work-divText3">
            <div className="work-header">PROTOTYPE</div>
            <div className="work-text">Develop solution prototype for each aspect of the problem</div>
            </div>
            </div>
            <div className="col-sm-6 col-lg-2 work">
            <img src={Testing} />
            <div className="work-divText4">
            <div className="work-header">TEST</div>
            <div className="work-text">Test the product using the best solutions identified</div>
            </div>
            </div>
        </div>
</div>

  {/* Our Projects */}
  <div className="Home-project">
        <p>OUR PROJECTS</p>
        <Project  texts={texts} />
        {/* <div className="Home-project-bg">
            <div className="project-header">FastPay - Mobile Wallet</div>
            <div className="project-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd</div>
            <img src={Fastpaylogo} className="Home-Picfastpayproject" />
            <img src={Fastpayillustration} className="Home-Picproject" />
        </div> */}
  </div>


    {/* Our Clients */}
    <div className="Home-client">
        <p>OUR CLIENTS</p>
        <div className="Home-client-bg">
        <div className="">

        <Swiper
      
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        // pagination={{ clickable: true }}
        >
        
        {slides}
        </Swiper>
        </div>
        <div className="row text-right hover14 column">
            <div className="col-sm-6 col-lg-6 ">
            <div className="client-header">CLIENT FEEDBACKS</div>
            <div className="client-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</div>
            </div>
            <div className="col-sm-6 col-lg-6 ">
            <div>
                <div>
                    <img src={Client} className="client-img" />
                    <div className="client-name">Bobby Cook</div>
                    <div className="client-position">CEO, Business Name</div>
                </div>
                <br />
                <div className="client-text2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</div>
            </div>
          </div>
           
        </div>
  </div>
</div>

        <div>
        <Switch>
          <Route path="/services/mobile-app-development" component={MobileAppDevelopment} />
          <Route path="/services/DedicatedSoftware" component={DedicatedSoftware} />
          {/* <Route path="/services/:id" component={Services} /> */}
        </Switch>
      </div>

    </div>
    )

    }  
export default Home;