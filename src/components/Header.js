import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Popover, Menu, Position } from "evergreen-ui";

import logo from "../images/fastpay logo.svg";
import Kurdish from "../images/kurdistan-flag-vector-8902581.png";
import English from "../images/Component 20 – 1.png";
import Arabic from "../images/Mask Group 2.svg";

import Home from "./Home";
import MobileAppDevelopment from "./MobileAppDevelopment";
import DedicatedSoftware from "./DedicatedSoftware";

function Header() {
  return (
    <div className="App">
      <div className="">
        <Switch>
          <Route exact path={["/", "/fastsolution"]} component={Home} />
          <Route
            path="/services/mobile-app-development"
            component={MobileAppDevelopment}
          />
          <Route
            path="/services/DedicatedSoftware"
            component={DedicatedSoftware}
          />
          {/* <Route path="/services/:id" component={DedicatedSoftware} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default Header;
