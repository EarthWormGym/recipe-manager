import React from "react";
import { useState } from 'react';

const RecipeForm = (props) => {

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
            <input type="submit" value="Submit" />
        </form>
    );
}

export default RecipeForm;