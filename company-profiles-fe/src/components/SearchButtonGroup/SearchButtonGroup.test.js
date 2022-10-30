import { render, screen, fireEvent } from "@testing-library/react";

import SearchButtonGroup from "./SearchButtonGroup";
import specialitiesData from "../../data/specialities";
const buttons = specialitiesData();

test("render group buttons", () => {
  render(<SearchButtonGroup buttons={buttons} />);
  const buttonPlumbing = screen.getByRole("button", {
    name: /plumbing/i,
  });
  const buttonElectrical = screen.getByRole("button", {
    name: /electrical/i,
  });
  const buttonExcavation = screen.getByRole("button", {
    name: /excavation/i,
  });

  expect(buttonPlumbing).toBeInTheDocument();
  expect(buttonElectrical).toBeInTheDocument();
  expect(buttonExcavation).toBeInTheDocument();

  // expect(buttonPlumbing.getAttribute('class')).toEqual('1');
  // expect(buttonElectrical.getAttribute('class')).toEqual('2');
  // expect(buttonExcavation.getAttribute('class')).toEqual('3');

  expect(buttonPlumbing.getAttribute("name")).toEqual("plumbing");
  expect(buttonElectrical.getAttribute("name")).toEqual("electrical");
  expect(buttonExcavation.getAttribute("name")).toEqual("excavation");

  expect(buttonPlumbing.getAttribute("value")).toEqual("1");
  expect(buttonElectrical.getAttribute("value")).toEqual("2");
  expect(buttonExcavation.getAttribute("value")).toEqual("3");
});

test("group buttons if button is clicked toggleBtnGroupHandler is also called", () => {
  const toggleBtnGroupHandler = jest.fn();
  render(<SearchButtonGroup buttons={buttons}  toggleBtnGroupHandler={toggleBtnGroupHandler}/>);
  buttons.forEach((button) => { 
    fireEvent.click(screen.getByRole("button", { name: button.label }))
    expect(toggleBtnGroupHandler).toHaveBeenCalled();
  });
});
