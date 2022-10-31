import React, { useState, useEffect } from "react";

import "./SearchButtonGroup.css";

const SearchButtonGroup = (props) => {
  const [buttons, setButtons] = useState(props.specialitesList);

  const toggleButton = (event) => {
    const value = parseInt(event.target.value);
    const newState = buttons.map((button) => {
      if (button.index === value) return { ...button, active: !button.active };
      return button;
    });

    setButtons(newState);
  };

  useEffect(() => {
    const selectedSpecialities = buttons
     // eslint-disable-next-line 
      .filter((button) => {
        if (button.active === true) return button;
      })
      .map((button) => {
        return button.value;
      });

    if (selectedSpecialities.length === 0) {
      props.setSelectedSpecilities(props.specialities);
    } else {
      props.setSelectedSpecilities(selectedSpecialities);
    }
    // eslint-disable-next-line 
  }, [buttons]);

  return (
    <div className="btn-group" type="btn-group">
      {buttons.map((elem) => {
        return (
          <button  
           data-testid={elem.value}
            name={elem.value}
            onClick={toggleButton}
            value={elem.index}
            className={elem.active === true ? "active" : ""}
            key={elem.index}
          >
            {elem.label}
          </button>
        );
      })}
    </div>
  );
};

export default SearchButtonGroup;
