/* eslint-disable jest/valid-expect */
import { render, screen } from "@testing-library/react";
import { ProductForm } from "./../Components/ProductForm"

beforeEach(() =>{
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<ProductForm/>);
});

describe("when the page is mounted", () => {
    it("should exists a title create product", () => {
        console.log("Existe un title create product")
        
        expect(screen.getByRole("heading", {name: /create product/i })).toBeInTheDocument();
    });

    it("should be three inputs(name, size, description)", () =>{
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/size/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    });

    it("should exists a submit button", ()=>{
        const submitBtn = screen.getByRole("button", {name: /submit/i});
        expect(submitBtn).toBeInTheDocument();
    })
})

describe("when the user send the form empty", () => {
    it("should show the validation messages", () => {
        const submitBtn = screen.getByRole("button", {name: /submit/i});
        expect(submitBtn).not.toBeDisabled();
        //click sobre el boton
        //verificar si existen los mensajes en la ui
    })
})