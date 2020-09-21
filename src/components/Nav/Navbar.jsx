import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import logo from "../../images/fastpay logo.svg";

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  /* border-bottom: 2px solid #f1f1f1; */
  padding: 0 10px;
  display: flex;
  justify-content: space-between;

  background-color: #fff6ee;
  font: normal normal bold 16px/19px Roboto;
  padding-top: 1%;
  padding-bottom: 1%;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        {" "}
        <a href="/fastsolution" className="navbar-brand">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
