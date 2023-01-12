import React from "react";
import { useState } from 'react';

const RecipeForm = () => {

    const [state, setState] = useState({
        recipeName: "",
        ingrediants: "",
        picture: "",
        type: ""
    });

    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.recipeName]: value,
            [event.target.ingrediants]: value,
            [event.target.picture]: value,
            [event.target.type]: value
        });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Recipe Name:
                    <input 
                        type="text" 
                        name="recipeName"
                        value={state.recipeName.value}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Ingrediants:
                    <input 
                        type="text" 
                        name="recipeIngrediants"
                        value={state.ingrediants.value}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Recipe Picture:
                    <input 
                        type="image" 
                        name="recipeImage"
                        value={state.picture.value}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Recipe Type:
                    <select name="recipeType" defaultValue="Select..." value={state.type.value} onChange={handleChange}>
                        <option value="african">African</option>
                        <option value="asian">Asian</option>
                        <option value="indian">Indian</option>
                        <option value="italian">Italian</option>
                        <option value="japanese">Japanese</option>
                    </select>
                </label>
            </div>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default RecipeForm;