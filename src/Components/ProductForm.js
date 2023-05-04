import { useReducer, useState } from "react";
import {productReducer, initialState, REQUIRED_FIELD} from "./../reducers/productReducer" 
export const ProductForm = () => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    const validateField = ({name, value}) =>{
        if(!value){
            dispatch({type: REQUIRED_FIELD, payload: {name}});
        }
    }

    const validateForm = ({name, size, description}) =>{
        validateField({name: "name", value : name});
        validateField({name: "size", value : size});
        validateField({name: "description", value : description});
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const {name,size,description} = e.target.elements;
        validateForm({name: name.value, size: size.value, description: description.value});

    }

    const handlerBlur = (e) => {
        const {name, value} = e.target;
        validateField({name, value})
    }
    return (
    <>
    <h2>Create product</h2>
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name">Nombre*</label>    
        <input 
        type="text" 
        name="name" 
        aria-label="name" 
        id="name" 
        placeholder="Nombre del producto" 
        onBlur={handlerBlur}/>
        <span>{state.name}</span>
        </div>
        
        <div>
        <label htmlFor="size">Size*</label>    
        <input 
        type="text" 
        name="size" 
        aria-label="size" 
        id="size" 
        placeholder="Tamaño del producto" 
        onBlur={handlerBlur}/>
        <span>{state.size}</span>
        </div>

        <div>
        <label htmlFor="description">Description*</label>    
        <textarea name="description"
        id="description"
        aria-label="description" 
        onBlur={handlerBlur}/>
        <span>{state.description}</span>
        </div>
        <button type="submit">submit*</button>
    </form>
    </>
    )
}
 
export default ProductForm;