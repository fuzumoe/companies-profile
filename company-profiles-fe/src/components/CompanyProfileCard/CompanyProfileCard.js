import React from "react";

import "./CompanyProfileCard.css";
import TextTags from "../TextTags/TextTags";
const CompanyProfileCard = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={props.profile.logo} alt="logo" />
      </div>

      <div className="card-body">
        <TextTags tags={props.profile.specialities}></TextTags>

        <div className="cord-body-title">
          <span className="left"> {props.profile.name} </span>
          <span className="right">
            {props.profile.city} , {props.profile.country}
          </span>
        </div>
     
        <p className="card-body-text">
        
            
          {props.profile.description}
        </p>
      </div>
    </div>
  );
};

export default CompanyProfileCard;
