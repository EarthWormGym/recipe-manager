import React from "react";
import { useState } from 'react';

const RecipeForm = (props) => {

    // const [state, setState] = useState({
    //     recipeName: "",
    //     ingrediants: "",
    //     picture: "",
    //     type: ""
    // });

    // const handleChange = (event) => {
    //     const value = event.target.value;
    //     let newRecipe = this.state.recipe
    //     setState({
    //         ...state,
    //         [event.target.recipeName]: value,
    //         [event.target.ingrediants]: value,
    //         [event.target.picture]: value,
    //         [event.target.type]: value
    //     });
    // };

    const [recipe, setRecipe] = useState('');

    const handleChange = (e) => {
        setRecipe(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: recipe
        });

        setRecipe(recipe);

        console.log(recipe);
    };

    return (
        <form style={{backgroundColor: 'powderblue', margin: '20px'}} onSubmit={handleSubmit}>
            <div>
                <label>
                    Recipe Name:
                    <input 
                        type="text" 
                        name="recipeName"
                        value={recipe}
                        onChange={handleChange}
                    />
                </label>
            </div>
            {/* <div>
                <label>
                    Ingrediants:
                    <input 
                        type="text" 
                        name="recipeIngrediants"
                        value={state.ingrediants || ""}
                        onChange={handleChange}
                    />
                </label>.recipeName
            </div>
            <div>
                <label>
                    Recipe Picture:
                    <input 
                        type="image"
                        alt="image error"
                        name="recipeImage"
                        value={state.picture || ""}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Recipe Type:
                    <select name="recipeType" defaultValue="Select..." value={state.type || ""} onChange={handleChange}>
                        <option value="african">African</option>
                        <option value="asian">Asian</option>
                        <option value="indian">Indian</option>
                        <option value="italian">Italian</option>
                        <option value="japanese">Japanese</option>
                    </select>
                </label>
            </div> */}
            <input type="submit" value="Submit" />
        </form>
    );
}

export default RecipeForm;