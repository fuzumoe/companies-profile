import React, { useState, useEffect } from "react";
import CompanyProfileCard from "./components/CompanyProfileCard/CompanyProfileCard";
import SearchBar from "./components/SearchBar/SearchBar";
import data from "./data/companies";
import specialitiesData from "./data/specialities";
import "./App.css";
 
const intialData = data()
const intialSpecialites = specialitiesData().map(speciality => { return speciality.value})

const App = () => {
  const [companiesProfiles, setCompaniesProfiles] = useState(intialData);
  const [companyName, setCompanyName] = useState("");
  const [specialities, setSpecialities] = useState(intialSpecialites)
  const placeholder = "Search company profile by name...";

  const searchOnChangHandler = (value) => {
    setCompanyName(value);
  };

  const setSelectedSpecilities = (specialities) => {
    setSpecialities(specialities);
  };

  useEffect(() => {  
    let profilesData = data()
    profilesData = profilesData.filter((profile) => {
      if(  profile.name.toLocaleLowerCase().includes(companyName.toLocaleLowerCase()))
      return profile;
    }).filter((profile) => {
      if(specialities.some((sp) => {return profile.specialities.includes(sp)}))
      return profile; 
      
    }); 
  setCompaniesProfiles(profilesData);
  }, [specialities, companyName]);

  return (
    <div className="wrapper">
      <SearchBar
        setSelectedSpecilities={setSelectedSpecilities}
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
