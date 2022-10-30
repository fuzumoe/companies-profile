import { render, screen, fireEvent } from "@testing-library/react";

import SearchInput from "./SearchInput";

const companyName = "some name"
const searchOnChangHandler = jest.fn()

const searchBar = (
  <SearchInput
    value={companyName}
    placeholder={companyName}
    searchOnChangHandler={searchOnChangHandler}
  />
);
test("SearchInput component", () => {
    render(searchBar);
    
    const input = screen.getByRole("textbox", { type: "text" })

    expect(input.getAttribute("value")).toEqual(companyName);

    fireEvent.change(input, {target: { value: "new value" }}); 

    expect(searchOnChangHandler).toHaveBeenCalled();


});
