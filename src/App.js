import { useState, useEffect } from 'react';

import './App.css';
import SearchIcon from './search.svg';
import RecipeSlot from './RecipeSlot';

const API_URL = 'http://www.omdbapi.com?apikey=adaa5ccf'

const App = () => {
    const [recipes, setRecipe] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchRecipes = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setRecipe(data.Search);
    }

    useEffect(() => {
        searchRecipes('');
    }, [])

    return (
        <div className="app">
            <h1>Recipe Manager</h1>

            <div className='search'>
                <input
                    placeholder="Search for recipe"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchRecipes(searchTerm)}
                />
            </div>

            {recipes?.length > 0
                ? (
                    <div className="container">
                        {recipes.map((recipe) => (
                            <RecipeSlot recipe={recipe} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No recipes found</h2>
                    </div>
                )}
        </div>
    );
}

export default App;