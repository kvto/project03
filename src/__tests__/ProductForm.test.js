/* eslint-disable jest/valid-expect */
import { fireEvent, render, screen } from "@testing-library/react";
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
        expect(screen.queryByText(/name is require/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/size is require/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/description is require/i)).not.toBeInTheDocument();
        const submitBtn = screen.getByRole("button", {name: /submit/i});
        expect(submitBtn).toBeInTheDocument();
        fireEvent.click(submitBtn);
        expect(screen.getByText(/name is require/i)).toBeInTheDocument();
        expect(screen.getByText(/size is require/i)).toBeInTheDocument();
        expect(screen.getByText(/description is require/i)).toBeInTheDocument();
        //click sobre el boton
        //verificar si existen los mensajes en la ui
    })
})

describe("when the user focus an input an blur it", () =>{
    it("The input name ", () => {
        expect(screen.queryByText(/name is require/i)).not.toBeInTheDocument();
        fireEvent.blur(screen.getByLabelText(/name/i), {target: {value:""}})
        expect(screen.getByText(/name is require/i)).toBeInTheDocument();
    })

    it("The input size ", () => {
        expect(screen.queryByText(/size is require/i)).not.toBeInTheDocument();
        fireEvent.blur(screen.getByLabelText(/size/i), {target: {value:""}})
        expect(screen.getByText(/size is require/i)).toBeInTheDocument();
    })

    it("The input description ", () => {
        expect(screen.queryByText(/description is require/i)).not.toBeInTheDocument();
        fireEvent.blur(screen.getByLabelText(/description/i), {target: {value:""}})
        expect(screen.getByText(/description is require/i)).toBeInTheDocument();
    })
})