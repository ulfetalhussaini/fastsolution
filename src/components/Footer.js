import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dash from "../images/dash.svg";
import Fastsolution_logo_dark from "../images/fastsolution_logo_dark.svg";
import fb from "../images/fb.svg";
import youtube from "../images/youtube.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import linkden from "../images/linkedin.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-yellow">
        <div className="row text-left hover14 column">
          <div className="col-sm-6 col-lg-8">
            <div className="div1">LET'S HEAR ABOUT YOUR PROJECT</div>
            <div className="div2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <button type="button" className="btn get-in-touch-button">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>

      <div className="footer-blue">
        <div className="row text-left hover14 column">
          <div className="col-sm-6 col-lg-4">
            <ul>
              <li>
                <img src={Fastsolution_logo_dark} className="footer-logo" />
              </li>
              <li className="liStyle">
                Transforming Business Using Technology
              </li>
              <li>
                <a href="#">
                  <img src={fb} className="social-icons" />
                </a>
                <a href="#">
                  <img src={twitter} className="social-icons" />
                </a>
                <a href="#">
                  <img src={linkden} className="social-icons" />
                </a>
                <a href="#">
                  <img src={instagram} className="social-icons" />
                </a>
                <a href="#">
                  <img src={youtube} className="social-icons" />
                </a>
              </li>
              <li>
                <small>© 2019-2020 Fast Solution Inc.</small>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-lg-4">
            <ul>
              <li>CONTACT US</li>
              <li className="liStyle">
                <img src={Dash} />
              </li>
              <li className="liStyle">US: +1 (202) 555-0156</li>
              <li className="liStyle">BD: +88 (019) 5599-0000</li>
              <li className="liStyle">IQ: +964 (751) 123-4567</li>
              <li className="liStyle">contact@fastsolutioninc.com</li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-4">
            <ul>
              <li>USEFUL LINKS</li>
              <li className="liStyle">
                <img src={Dash} />
              </li>
              <li className="liStyle">
                <a href="#">About us</a>
              </li>
              <li className="liStyle">
                <a href="#">Our Blog</a>
              </li>
              <li className="liStyle">
                <a href="#">Portfolio</a>
              </li>
              <li className="liStyle">
                <a href="#">Work with us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
