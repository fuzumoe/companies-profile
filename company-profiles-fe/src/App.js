import React, { useState, useEffect } from "react";
import CompanyProfileCard from "./components/CompanyProfileCard/CompanyProfileCard";
import SearchBar from "./components/SearchBar/SearchBar";

import specialitiesData from "./data/specialities";
import "./App.css";

const specialitesList = specialitiesData();
const intialSpecialites = specialitesList.map((speciality) => {
  return speciality.value;
});

const App = () => {
  const [loading, setLoading] = useState(true);
  const [companiesProfiles, setCompaniesProfiles] = useState();
  const [companyName, setCompanyName] = useState("");
  const [specialities, setSpecialities] = useState(intialSpecialites);
  const placeholder = " profile by name...";

  const searchOnChangHandler = (value) => {
    setCompanyName(value);
  };

  const setSelectedSpecilities = (specialities) => {
    setSpecialities(specialities);
  };

  const getFerchUrl = () => {
    let url = "http://localhost:5050/profiles.json/";
    if (companyName.length > 0 && specialities.length > 0)
      url = `${url}?name=${companyName}&specialities=${specialities.join(",")}`;
    if (companyName.length > 0 && specialities.length < 0)
      url = `${url}?name=${companyName}`;
    if (companyName.length < 0 && specialities.length > 0)
      url = `${url}?pecialities=${specialities.join(",")}`;
    return url;
  };

  const fetchData = async (url) => {
    setLoading(true);
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let response = await fetch(url, requestOptions);
    let profiles = await response.json();
    setCompaniesProfiles(profiles);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(getFerchUrl());
  }, [specialities, companyName]);

  useEffect(() => {
    fetchData(getFerchUrl());
  }, []);

  return (
    <div className="wrapper">
      <SearchBar
        setSelectedSpecilities={setSelectedSpecilities}
        searchOnChangHandler={searchOnChangHandler}
        specialitesList={specialitesList}
        specialities={intialSpecialites}
        companyName={companyName}
        placeholder={placeholder}
      ></SearchBar>
      {loading && (
        <div className="container">
          <h1>....LOADING....</h1>
        </div>
      )}
      {!loading && (
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
      )}
    </div>
  );
};

export default App;
