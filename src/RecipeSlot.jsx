import React from 'react';

const RecipeSlot = ({ recipe }) => {
    return (
        <div className="recipe">
            <div>
                <p>{recipe.Name}</p>
            </div>
            <div>
                <img src={recipe.mealPicture} alt={recipe.Name}/>
            </div>
            <div>
                <span>{recipe.Type}</span>
                <h3>{recipe.Name}</h3>
            </div>
        </div>
    );
}

export default RecipeSlot;