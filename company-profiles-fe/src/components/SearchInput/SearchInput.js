import React from 'react'
import "./SearchInput.css";

const SearchInput = (props) => {
 
  const searchOnChang = (event) =>{
    props.searchOnChangHandler(event.target.value)
  }
  return (
    <input type="text" onChange={searchOnChang} value={props.value} placeholder={props.placeholder}/>

  );
};

export default SearchInput;
