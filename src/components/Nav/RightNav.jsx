import React from "react";
import styled from "styled-components";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Popover, Menu, Position } from "evergreen-ui";
import Kurdish from "../../images/kurdistan-flag-vector-8902581.png";
import English from "../../images/Component 20 – 1.png";
import Arabic from "../../images/Mask Group 2.svg";

import Home from "../Home";
import MobileAppDevelopment from "../MobileAppDevelopment";
import DedicatedSoftware from "../DedicatedSoftware";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li className="nav-item active">
        <Link to={"/fastsolution"} className="nav-link">
          HOME <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/aboutus"} className="nav-link">
          ABOUTUS
        </Link>
      </li>
      <li className="nav-item">
        <Popover
          position={Position.TOP}
          content={
            <Menu>
              <div className="row text-right hover14 column Menuclass">
                <div className="col-sm-6 col-lg-4 divWrap">
                  <a
                    className="MenuItem service-dropdown-header"
                    href="#"
                    role="menuitem"
                  >
                    Predictive Software Engineering
                  </a>
                  <br />
                  <a
                    className="MenuItem service-dropdown-text"
                    href="#"
                    role="menuitem"
                  >
                    ◻ Business Application Development
                  </a>
                  <br />
                  <a
                    className="MenuItem service-dropdown-text"
                    href="#"
                    role="menuitem"
                  >
                    ◻ Full-Stack Web Development
                  </a>
                  <br />
                  <a
                    className="MenuItem service-dropdown-text"
                    href="#"
                    role="menuitem"
                  >
                    ◻ Big Data & Business Intelligence Development
                  </a>
                  <a
                    className="MenuItem service-dropdown-text"
                    href="#"
                    role="menuitem"
                  >
                    ◻ Application Migration and Legacy Modernization Services
                  </a>
                  <br />
                  <a
                    className="MenuItem service-dropdown-text"
                    href="/services/mobile-app-development"
                    role="menuitem"
                  >
                    ◻ Mobile App Development
                  </a>
                  <br />
                  <a
                    className="MenuItem service-dropdown-text"
                    href="#"
                    role="menuitem"
                  >
                    ◻ Software Testing & QA
                  </a>
                </div>

                <div className="col-sm-6 col-lg-4">
                  <a
                    className="MenuItem service-dropdown-header"
                    href="/services/DedicatedSoftware"
                    role="menuitem"
                  >
                    Dedicated Software Development Teams
                  </a>
                </div>

                <div className="col-sm-6 col-lg-4">
                  <a
                    className="MenuItem service-dropdown-header"
                    href="#"
                    role="menuitem"
                  >
                    Centers of Excellence
                  </a>
                  <br />
                  <a
                    className="MenuItem service-dropdown-text"
                    href="#"
                    role="menuitem"
                  >
                    ◻ TETRA: Technical Debt Reduction
                  </a>
                  <br />
                  <a
                    className="MenuItem service-dropdown-text"
                    href="#"
                    role="menuitem"
                  >
                    ◻ Robotic Process Automation
                  </a>
                  <br />
                  <a
                    className="MenuItem service-dropdown-text"
                    href="#"
                    role="menuitem"
                  >
                    ◻ Artificial Intelligence & Machine Learning
                  </a>
                  <br />
                  <a
                    className="MenuItem service-dropdown-text"
                    href="#"
                    role="menuitem"
                  >
                    ◻ Chatbots
                  </a>
                </div>
              </div>
            </Menu>
          }
        >
          <Link to={"/"} className="nav-link">
            SERVICES
          </Link>
        </Popover>
      </li>
      <li className="nav-item">
        <Link to={"/portfolio"} className="nav-link">
          PORTFOLIO
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/contactus"} className="nav-link">
          CONTACTUS
        </Link>
      </li>
      <li className="nav-item">
        <Popover
          position={Position.BOTTOM}
          content={
            <Menu>
              <div className="">
                <a className="" href="#" role="menuitem">
                  <img src={English} />
                  <img src={Kurdish} />
                  <img src={Arabic} className="lang" />
                </a>
              </div>
            </Menu>
          }
        >
          <Link to={"/"} className="nav-link lang-selectd">
            <img src={English} />
          </Link>
        </Popover>
      </li>
    </Ul>
  );
};

export default RightNav;
