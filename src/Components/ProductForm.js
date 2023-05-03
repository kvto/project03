import { useReducer, useState } from "react";
export const ProductForm = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
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
        placeholder="Nombre del producto" />
        </div>

        <div>
        <label htmlFor="size">Size*</label>    
        <input 
        type="text" 
        name="size" 
        aria-label="size" 
        id="size" 
        placeholder="Tamaño del producto" />
        </div>

        <div>
        <label htmlFor="description">Description*</label>    
        <textarea name="description"
        id="description"
        aria-label="description" />
        </div>
        <button type="submit">submit*</button>
    </form>
    </>
    )
}
 
export default ProductForm;