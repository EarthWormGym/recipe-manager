import { useState } from 'react';

const App = () => {
    const [recipe, addRecipe] = useState({
        name: "",
        ingrediants: "",
        instructions: "",
    });

    return (
        <div className="App">
            <h1 align="center">
                Welcome to my recipe manager
            </h1>
            <div>{recipe}</div>
            <button onClick={addRecipe({
                name: 'Crab Linguine',
                ingrediants: 'Crab, linguine, tomatoe, garlic',
                instructions: 'Heat up crab, boil pasta, chop tomatoes and mix with crab and pasta',
            })}>
                Add Recipe
            </button>
        </div>
    )
}

const Recipe = (props) => {
    return (
        <>
            <h2>Name: {props.name}</h2>
            <h3>Ingrediants: {props.ingrediants}</h3>
            <p>Instructions: {props.instructions}</p>
        </>
    )
}

export default App;