import React, {useState, useEffect} from 'react'
import "./ButtonGroup.css";

const ButtonGroup = (props) => {

  const toggleButton = (event) =>{ 
    props.toggleBtnGroupHandler(parseInt(event.target.value))
  }

  return (
    <div className="btn-group">
    {props.buttons.map(elem => {
        return (
          <button onClick={toggleButton} value={elem.index} className={elem.active === true ? 'active': ''}  key={elem.index}>{elem.label  }</button>
        );
      })}
   </div>
  );
};

export default ButtonGroup;
