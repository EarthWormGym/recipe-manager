import React from 'react';
import './CSS/Recipe.css'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Recipe = ({recipes}) => {

    console.log(recipes);
    return recipes.map((recipe, index) => (
        <div className="recipe" key={index}>
            <div class="card">
                <div class="card-header" key={recipe.id}>
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
                    <RiCloseCircleLine />
                    <TiEdit />
                </div>
            </div>
        </div>
    ));
}

export default Recipe;