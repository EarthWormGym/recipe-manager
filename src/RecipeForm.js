import React from "react";
import { useState } from 'react';
import './CSS/RecipeForm.css';

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
        setRecipe({
            recipeName: '',
            ingredients: '',
            instructions: '',
            image: null,
            mealType: ''
        })
    };

    return (
        <div class="expanded-form-container">
            <form onSubmit={handleSubmit} class="recipe-form form-container" >
                <div class="center">

                    <h1>Recipe Form</h1>

                    <div class="form-input-material">
                        <label>
                            Recipe Name:
                            <input 
                                type="text" 
                                name="recipeName"
                                value={recipe.recipeName}
                                onChange={handleChange}
                                class="form-control-material"
                            />
                        </label>
                    </div>
                    <div class="form-input-material">
                        <label>
                            Ingredients:
                            <input
                                type="text" 
                                name="ingredients"
                                value={recipe.ingredients}
                                onChange={handleChange}
                                class="form-control-material"
                            />
                        </label>
                    </div>
                    <div class="form-input-material">
                        <label>
                            Instructions:
                            <input 
                                type="text" 
                                name="instructions"
                                value={recipe.instructions}
                                onChange={handleChange}
                                class="form-control-material"
                            />
                        </label>
                    </div>
                    <div class="form-input-material">
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
                    <div class="form-input-material">
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
                    <div>
                        <button type="submit" class="form-submit-btn">Submit</button>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default RecipeForm;

