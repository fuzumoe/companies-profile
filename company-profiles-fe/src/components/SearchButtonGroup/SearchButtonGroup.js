import React, { useState, useEffect } from "react";

import specialitiesData from "../../data/specialities";
import "./SearchButtonGroup.css";

const SearchButtonGroup = (props) => {
  const [buttons, setButtons] = useState(specialitiesData);

  const toggleButton = (event) => {
    const value = parseInt(event.target.value);
    const newState = buttons.map((button) => {
      if (button.index === value) return { ...button, active: !button.active };
      return button;
    });

    setButtons(newState);
  };

  useEffect(
    (specialities) => {
      const all = specialitiesData().map((button) => {
        return button.value;
      });

      const selectedSpecialities = buttons
        .filter((button) => {
          if (button.active === true) return button;
        })
        .map((button) => {
          return button.value;
        });

      if (selectedSpecialities.length == 0) {
        props.setSelectedSpecilities(all);
      } else {
        props.setSelectedSpecilities(selectedSpecialities);
      }
    },
    [buttons]
  );

  return (
    <div className="btn-group">
      {buttons.map((elem) => {
        return (
          <button
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
