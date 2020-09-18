import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Popover, Menu, Position } from 'evergreen-ui'

import logo from "./fastpay logo.svg";
import "./App.css";

import Home from "./components/Home";
import MobileAppDevelopment from "./components/MobileAppDevelopment";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navColor">
        <a href="/fastsolution" className="navbar-brand">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav navPadding ">
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
              position={Position.BOTTOM}
              content={
                <Menu>
                <div className="row text-right hover14 column Menuclass">
            <div className="col-sm-6 col-lg-4">
            <a className="MenuItem service-dropdown-header" href="/services/mobile-app-development" role="menuitem">
                 Predictive Software Engineering
                      </a>
                      <br />
                      <a className="MenuItem" href="/services/mobile-app-development" role="menuitem">
                      ◻ Mobile App Development
                      </a>
                      <br />
                      <a className="MenuItem" href="/services/mobile-app-development" role="menuitem">
                      ◻ Mobile App Development
                      </a>
                      <br />
                      <a className="MenuItem" href="/services/mobile-app-development" role="menuitem">
                      ◻ Mobile App Development
                      </a>
                      <a className="MenuItem" href="/services/mobile-app-development" role="menuitem">
                      ◻ Predictive Software Engineering
                      </a>
                      <br />
                      <a className="MenuItem" href="/services/mobile-app-development" role="menuitem">
                      ◻ Mobile App Development
                      </a>
                      <br />
                      <a className="MenuItem" href="/services/mobile-app-development" role="menuitem">
                      ◻ Mobile App Development
                      </a>
            </div>

            <div className="col-sm-6 col-lg-4">
            <a className="MenuItem service-dropdown-header" href="/services/mobile-app-development" role="menuitem">
                 Dedicated Software Development Teams
                      </a>
            </div>

            <div className="col-sm-6 col-lg-4">
            <a className="MenuItem service-dropdown-header" href="/services/mobile-app-development" role="menuitem">
                  Centers of Excellence
                      </a>
                      <br />
                      <a className="MenuItem" href="/services/mobile-app-development" role="menuitem">
                      ◻ Mobile App Development
                      </a>
                      <br />
                      <a className="MenuItem" href="/services/mobile-app-development" role="menuitem">
                      ◻ Mobile App Development
                      </a>
                      <br />
                      <a className="MenuItem" href="/services/mobile-app-development" role="menuitem">
                      ◻ Mobile App Development
                      </a>
                      <br />
                      <a className="MenuItem" href="/services/mobile-app-development" role="menuitem">
                      ◻ Mobile App Development
                      </a>
            </div>
            </div>
                  
                </Menu>
              }
            >
              <Link className="nav-link">SERVICES</Link>
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
            <Link to={"/en"} className="nav-link">
              EN
            </Link>
          </li> 
        </ul>
        </div>
      </nav>

      <div className="">
        <Switch>
          <Route exact path={["/", "/fastsolution"]} component={Home} />
          <Route path="/services/mobile-app-development" component={MobileAppDevelopment} />
          {/* <Route path="/services/:id" component={Services} /> */}
        </Switch>
      </div>
      </div>
   
  );
}

export default App;
