import { render, screen, } from "@testing-library/react";

import TextTags from "./TextTags";
import specialitiesData from "../../data/specialities";

const specialitesList = specialitiesData();
const tags = specialitesList.map(speciality => { return speciality.value})
const textTags = ( <TextTags tags={tags}></TextTags>)
test("TextTags component", () => {
    render(textTags);
    tags.forEach((tag) => { 
        const span = screen.getByText(tag)
        expect(span.classList.contains(`text-tag tag-${tag.toLowerCase()}`)).toBe(false)
    })
})

 