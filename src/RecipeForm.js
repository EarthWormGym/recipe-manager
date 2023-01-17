import React from "react";
import { useState } from 'react';

const RecipeForm = (props) => {

    const [recipe, setRecipe] = useState({
        recipeName: '',
        ingredients: '',
        instructions: '',
        image: null,
        mealType: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'image') {
            const reader = new FileReader();
            reader.onloadend = function() {
                setRecipe({...recipe, [name]: reader.result });
            }
            reader.readAsDataURL(e.target.files[0])
        } else {
            setRecipe({...recipe, [name]: value });
        }
        
        setRecipe({...recipe, [name]: value });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            recipeData: recipe
        });

        setRecipe(recipe);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div class="center">

                <h1>Recipe Form</h1>

                <div class="inputbox">
                    <label>
                        Recipe Name:
                        <input 
                            type="text" 
                            name="recipeName"
                            value={recipe.recipeName}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div class="inputbox">
                    <label>
                        Ingredients:
                        <input
                            type="text" 
                            name="ingredients"
                            value={recipe.ingredients}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div class="inputbox">
                    <label>
                        Instructions:
                        <input 
                            type="text" 
                            name="instructions"
                            value={recipe.instructions}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div class="inputbox">
                    <label>
                        Image:
                        <input 
                            type="file" 
                            name="image"
                            onChange={handleChange}
                            accept="image/*"
                        />
                    </label>
                </div>
                <div class="inputbox">
                    <label>
                        Type of meal:
                        <select 
                            name="mealType"
                            value={recipe.mealType}
                            onChange={handleChange}
                        >
                            <option value="N/A">N/A</option>
                            <option value="Asian">Asian</option>
                            <option value="Italian">Italian</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Indian">Indian</option>
                            <option value="Spanish">Spanish</option>
                        </select>
                    </label>
                </div>
                <div class="inputbox">
                    <button type="submit">Submit</button>
                </div>

            </div>
        </form>
    );
}

export default RecipeForm;

