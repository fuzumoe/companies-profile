import React, { useState, useEffect } from "react";
import CompanyProfileCard from "./components/CompanyProfileCard/CompanyProfileCard";
import SearchBar from "./components/SearchBar/SearchBar";
import data from "./data/companies";
import "./App.css";

const specialitiesData = [
  {
    index: 1,
    label: "PlUMBING",
    value: "plumbing",
    active: false,
  },
  {
    index: 2,
    label: "ELECTRICAL",
    value: "electrical",
    active: false,
  },
  {
    index: 3,
    label: "EXCAVATION",
    value: "excavation",
    active: false,
  },
];
const App = () => {
  const [companiesProfiles, setCompaniesProfiles] = useState(data);
  const [specialities, setSpecialities] = useState(specialitiesData);
  const [companyName, setCompanyName] = useState("");
  const placeholder = "Search company profile by name...";

  const searchOnChangHandler = (value) => {
    setCompanyName(value);
  };

  const toggleButtonGroupHandler = (value) => {
    const newState = specialities.map((specility) => {
      if (specility.index === value)
        return { ...specility, active: !specility.active };

      return specility;
    });
    setSpecialities(newState);
  };

  useEffect(() => {
    const filteredSpecialities = specialities
      .filter((data) => {
        if (data.active) return data.value;
      })
      .map((data) => {
        return data.value.toLocaleLowerCase();
      });

    const newCompanyProfilesState = companiesProfiles.filter((profile) => {
      
      const sps = profile.specialities 
      if(
        filteredSpecialities.some((sp) => {return sps.includes(sp);}) ||
        profile.name.toLocaleLowerCase().includes(companyName.toLocaleLowerCase())
      )
      return profile;
       
      
     
    });
    console.log(newCompanyProfilesState)
    setCompaniesProfiles(newCompanyProfilesState);
    if (newCompanyProfilesState.length > 0) {
      setCompaniesProfiles(newCompanyProfilesState);
    } else {
      setCompaniesProfiles(data);
    }
  }, [specialities, companyName]);

  return (
    <div className="wrapper">
      <SearchBar
        toggleBtnGroupHandler={toggleButtonGroupHandler}
        searchOnChangHandler={searchOnChangHandler}
        specialities={specialities}
        companyName={companyName}
        placeholder={placeholder}
      ></SearchBar>
      <div className="container">
        {companiesProfiles.map((profile) => {
          return (
            <CompanyProfileCard
              key={profile.id}
              profile={profile}
            ></CompanyProfileCard>
          );
        })}
      </div>
    </div>
  );
};

export default App;
