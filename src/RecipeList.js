import React, { useState } from 'react'
import Recipe from './Recipe';
import RecipeForm from './RecipeForm'
import './CSS/RecipeList.css';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [showRecipeForm, setShowRecipeForm] = useState(false);

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
      <button className="form-show-btn" onClick={() => setShowRecipeForm(true)}>
        Add Recipe
      </button>
      {showRecipeForm && <RecipeForm onSubmit={addRecipe} />}
      <div class="list-container">
        <Recipe recipes={recipes} removeRecipe={removeRecipe}/>
      </div>
    </div>
  )
}

export default RecipeList