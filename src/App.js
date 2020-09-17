import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./fastpay logo.svg";
import "./App.css";

import Home from "./components/Home";
import MobileAppDevelopment from "./components/MobileAppDevelopment";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navColor">
        <a href="/fastsolution" className="navbar-brand">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <div className="navbar-nav navPadding ">
          <li className="nav-item">
            <Link to={"/fastsolution"} className="nav-link">
              HOME
            </Link>
          </li>
           <li className="nav-item">
            <Link to={"/aboutus"} className="nav-link">
              ABOUTUS
            </Link>
          </li> 
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              SERVICES
            </Link>
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
