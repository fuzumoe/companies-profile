import { render, screen, fireEvent } from "@testing-library/react";

import CompanyProfileCard from "./CompanyProfileCard";

import data from "../../data/companies";

const companiesProfile = data()[0]
const companyProfileCard = (
  <CompanyProfileCard
    key={companiesProfile.id}
    profile={companiesProfile}
  ></CompanyProfileCard>
);

test("CompanyProfileCard component", () => {
  render(companyProfileCard);

  const imgSrc = screen.getByRole("img", {src: companiesProfile.logo})
  const spanName = screen.getByText(companiesProfile.name)
  const spanLocation = screen.getByText(`${companiesProfile.city}, ${companiesProfile.country}`)
  const pDescription = screen.getByText(companiesProfile.description)
  
  expect(imgSrc).toBeInTheDocument(); 
  expect(spanName).toBeInTheDocument();
  expect(spanLocation).toBeInTheDocument();
  expect(pDescription).toBeInTheDocument(); 
});
