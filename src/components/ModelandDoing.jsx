import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tickicon from "../images/tick icon.svg";

const ModelandDoing = (props) => { 

  return (
    <div>
      {props.texts.map((text) => {
        const { id, description } = text;
        return (
          <li key={id}>  
            <img src={Tickicon} className="tickicon" />
            <p className="tickiconText">{description}</p>
          </li>
        );
      })}
    </div>
  );
};
export default ModelandDoing;
