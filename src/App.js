import { useState, useEffect } from 'react';

import './App.css';
import SearchIcon from './search.svg';
import RecipeSlot from './RecipeSlot';
import RecipeForm from './RecipeForm';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const searchRecipes = async (title) => {
        const response = await fetch()
        const data = await response.json();
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
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchRecipes(searchTerm)}
                />
            </div>

            <div>
                <RecipeForm />
            </div>
        </div>
    );
}

export default App;