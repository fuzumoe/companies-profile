import { render, screen, fireEvent } from "@testing-library/react";

import SearchBar from './SearchBar'

import specialitiesData from "../../data/specialities";
import data from "../../data/companies";

const companiesProfiles = data()
const specialitesList = specialitiesData();
const intialSpecialites = specialitesList.map(speciality => { return speciality.value})
const setSelectedSpecilities =  jest.fn();
const companyName = "some name"
const placeholder = " profile by name...";
const searchOnChangHandler = jest.fn()

const searchBar = (
    <SearchBar
        setSelectedSpecilities={setSelectedSpecilities}
        searchOnChangHandler={searchOnChangHandler}
        specialitesList={specialitesList}
        specialities = {intialSpecialites}
        companyName={companyName}
        placeholder={placeholder}
      ></SearchBar>
)
test("SearchInput componenent", () => {
    render(searchBar);

    const input = screen.getByRole("textbox", { type: "text" })
    const button = screen.getByRole("button", {name: ""})
    const svg = screen.getByTestId("svg")

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(svg).toBeInTheDocument();
}) 