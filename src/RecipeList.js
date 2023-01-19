import React, { useState } from 'react'
import Recipe from './Recipe';
import RecipeForm from './RecipeForm'
import './CSS/RecipeList.css';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = recipe => {
    const newRecipes = [recipe, ...recipes]
    
    setRecipes(newRecipes);
  };

  return (
    <div>
      <div>
        <RecipeForm onSubmit={addRecipe} />  
      </div>
      <div class="list-container">
        <Recipe recipes={recipes} />
      </div>
    </div>
  )
}

export default RecipeList