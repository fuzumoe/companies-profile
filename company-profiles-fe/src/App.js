import React, { useState } from "react";
import CompanyProfileCard from "./components/CompanyProfileCard/CompanyProfileCard";
import SearchBar from "./components/SearchBar/SearchBar";
import data from "./data/companies";
import "./App.css";

const specialitiesData = [
  {
    index: 1,
    label: "PlUMBING",
    value: "Plumbing",
    active: false,
  },
  {
    index: 2,
    label: "ELECTRICAL",
    value: "Electrical",
    active: false,
  },
  {
    index: 3,
    label: "EXCAVATION",
    value: "Excavation",
    active: false,
  },
];
const App = () => {
  const [companiesProfile, setCompaniesProfile] = useState(data);
  const [specialities, setSpecialities] = useState(specialitiesData);
  const [companyName, setCompanyName] = useState("")
  const placeholder = "Search company profile by name..."

  const searchOnChangHandler = (value) => { 
    setCompanyName(value)
  }
  const toggleButtonGroupHandler = (value) => {
    const newState = specialities.map((specility) => {
      if (specility.index === value)
        return { ...specility, active: !specility.active };

      return specility;
    });
    setSpecialities(newState);
  };

  return (
    <React.Fragment>
      <SearchBar
        toggleBtnGroupHandler={toggleButtonGroupHandler}
        searchOnChangHandler={searchOnChangHandler}
        specialities={specialities}
        companyName={companyName}
        placeholder={placeholder}
      ></SearchBar>
      <React.Fragment>
        <div className="container">
          {companiesProfile.map((profile) => {
            return (
              <CompanyProfileCard
                key={profile.id}
                profile={profile}
              ></CompanyProfileCard>
            );
          })}
        </div>
      </React.Fragment>
    </React.Fragment>
  );
};

export default App;
