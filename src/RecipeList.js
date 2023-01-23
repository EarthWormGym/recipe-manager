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

  const removeRecipe = id => {
    const removeArr = [...recipes].filter(recipe => recipe.id !== id)

    setRecipes(removeArr);
  };

  return (
    <div>
      <div>
        <RecipeForm onSubmit={addRecipe} />  
      </div>
      <div class="list-container">
        <Recipe recipes={recipes} removeRecipe={removeRecipe}/>
      </div>
    </div>
  )
}

export default RecipeList