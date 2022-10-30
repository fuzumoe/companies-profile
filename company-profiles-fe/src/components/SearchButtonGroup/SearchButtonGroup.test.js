import { render, screen, fireEvent } from "@testing-library/react";

import SearchButtonGroup from "./SearchButtonGroup";
import specialitiesData from "../../data/specialities";

const specialitesList = specialitiesData();
const specialities = specialitesList.map(speciality => { return speciality.value})
const setSelectedSpecilities =  jest.fn();
const searchButtonGroup = (<SearchButtonGroup 
setSelectedSpecilities={setSelectedSpecilities}  
specialitesList={specialitesList} 
specialities = {specialities}
/>)

test("GroupButton component", () => {
  render(searchButtonGroup);
  specialitesList.forEach((speciality) => { 
    const button = screen.getByRole("button", { name: speciality.label })
    expect(button).toBeInTheDocument();
    expect(button.getAttribute("name")).toEqual(speciality.value);
    expect(parseInt(button.getAttribute("value"))).toEqual(speciality.index);
    expect(button.textContent).toEqual(speciality.label);

    fireEvent.click(button)
    
    expect(setSelectedSpecilities).toHaveBeenCalled();
    expect(button.classList.contains('active')).toBe(true)

    fireEvent.click(button)
    
    expect(setSelectedSpecilities).toHaveBeenCalled();
    expect(button.classList.contains('active')).toBe(false)
 
  });
});

 
