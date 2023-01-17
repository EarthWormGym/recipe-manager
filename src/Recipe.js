import React from 'react';

const Recipe = ({recipes}) => {

    console.log(recipes);
    return recipes.map((recipe, index) => (
        <div className="recipe" key={index}>
            <div key={recipe.id}>
                {recipe.recipeData.recipeName}
            </div>
            <div key={recipe.id}>
                {recipe.recipeData.ingredients}
            </div>
            <div key={recipe.id}>
                {recipe.recipeData.instructions}
            </div>
            <div key={recipe.id}>
                <img src={recipe.recipeData.image} alt="image of meal" />
            </div>
            <div key={recipe.id}>
                {recipe.recipeData.mealType}
            </div>
        </div>
    ));
}

export default Recipe;