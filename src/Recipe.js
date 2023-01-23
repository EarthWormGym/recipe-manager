import React from 'react';
import './CSS/Recipe.css'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Recipe = ({recipes, removeRecipe}) => {

    return recipes.map((recipe, index) => (
        <div className="recipe" key={index}>
            <div class="card" key={recipe.id}>
                <div class="card-header">
                    <img src={recipe.recipeData.image} alt="image of meal" />
                </div>
                <span class="tag tag-pink">{recipe.recipeData.mealType}</span>
                <div class="card-body">
                    <h4>
                        {recipe.recipeData.recipeName}
                    </h4>
                    <h5>Ingredients:</h5>
                    <p>
                        {recipe.recipeData.ingredients}
                    </p>
                    <h5>Instructions:</h5>
                    <p>
                        {recipe.recipeData.instructions}
                    </p>
                </div>
                <div className="icons">
                    <RiCloseCircleLine 
                    onClick={() => removeRecipe(recipe.id)}
                    className="delete-icon"
                    />
                    <TiEdit />
                </div>
            </div>
        </div>
    ));
}

export default Recipe;