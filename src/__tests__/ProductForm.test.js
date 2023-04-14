/* eslint-disable jest/valid-expect */
import { render, screen } from "@testing-library/react";
import { ProductForm } from "./../Components/ProductForm"

describe("when the page is mounted", () => {

    it("should exists a title create product", () => {
        console.log("Existe un title create product")
        render(<ProductForm/>);
        expect(screen.getByRole("heading", {name: /create product/i }));
    })
})