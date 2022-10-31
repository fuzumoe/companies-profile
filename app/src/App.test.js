import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import data from "./data/companies";
import specialitiesData from "./data/specialities";

 

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(data())
  })
});


test("renders all components", async () => {
  render(<App />);

  expect(global.fetch).toHaveBeenCalled();

  let cards = await screen.findAllByTestId("card");

  expect(cards.length).toBe(20);

  
});
