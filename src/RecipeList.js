import React, { useState } from 'react'
import Recipe from './Recipe';
import RecipeForm from './RecipeForm'

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = recipe => {
    const newRecipes = [recipe, ...recipes]
    
    setRecipes(newRecipes);
  };

  return (
    <div>
        <h1>What you cooking today?</h1>
        <RecipeForm onSubmit={addRecipe} />
        <Recipe recipes={recipes} />
    </div>
  )
}

export default RecipeList