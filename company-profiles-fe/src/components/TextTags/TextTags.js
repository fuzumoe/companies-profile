import React from "react";

import "./TextTags.css";

const TextTags = (props) => {
  return (
    <div>
      {props.tags.map((tag, index) => {
        return (
          <span key={index} className={`text-tag tag-${tag.toLowerCase()}`}>{tag}</span>
        );
      })}
    </div>
  );
};

export default TextTags;
