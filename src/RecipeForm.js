import React from "react";
import { useState } from 'react';

const RecipeForm = () => {

    const [state, setState] = useState({
        recipeName: "",
        picture: "",
        ingrediants: "",
        type: ""
    })

    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.recipeName]: value,
            [event.target.picture]: value,
            [event.target.ingrediants]: value,
            [event.target.type]: value
        });
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Recipe Name:
                <input 
                    type="text" 
                    name="recipeName"
                    value={state.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Recipe Picture:
                <input 
                    type="image" 
                    name="recipeImage"
                    value={state.picture}
                    onChange={handleChange}
                />
            </label>
            <label>
                Ingrediants:
                <input 
                    type="text" 
                    name="recipeIngrediants"
                    value={state.ingrediants}
                    onChange={handleChange}
                />
            </label>
            <label>
                Recipe Type:
                <select name="recipeType" value={state.type} onChange={handleChange} placeholder="Select...">
                    <option value="asian">Asian</option>
                    <option value="japanese">Japanese</option>
                    <option value="indian">Indian</option>
                    <option value="english">English</option>
                    <option value="african">African</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default RecipeForm;