import { useState, useEffect } from 'react';

import './App.css';
import SearchIcon from './search.svg';
import RecipeList from './RecipeList';

const App = () => {

    return (
        <div className="app">
            <h1>Recipe Manager</h1>

            <div className='search'>
                <input
                    placeholder="Search for recipe"
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                />
            </div>

            <div>
                <RecipeList />
            </div>
        </div>
    );
}

export default App;