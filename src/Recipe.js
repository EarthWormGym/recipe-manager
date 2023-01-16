import React from 'react';
import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';

const Recipe = ({recipes}) => {

    return recipes.map((recipe, index) => (
        <div 
            className="recipe"
            key={index}
        >
            <div key={recipe.id}>
                {recipe.text}
            </div>
        </div>
    ));
}

export default Recipe;