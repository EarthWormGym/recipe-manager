import React, { useState } from 'react'
import RecipeForm from './RecipeForm'

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = recipe => {
    if(!recipe.text || /^\s*$/.test(recipe.text)) {
        return
    }

    const newRecipes = [recipe, ...recipes]

    setRecipes(newRecipes);
    console.log(...recipes);
  };

  return (
    <div>
        <h1>What you cooking today?</h1>
        <RecipeForm onSubmit={addRecipe} />
    </div>
  )
}

export default RecipeList