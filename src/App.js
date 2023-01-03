
const App = () => {
    const isLogged = true;
    const loggedInMessage = 'User found, Welcome to the React app!';
    const loggedOutMessage = 'No user found';

    return (
        <div className="App">
            <h1>Hello World</h1>
            <p>I am coding in React!</p>
            <div>
                {isLogged ? (
                    <p>
                        {loggedInMessage}
                    </p> 
                ) : (
                    <p>
                        {loggedOutMessage}
                    </p>
                )}
            </div> 
        </div>
    );
}

export default App;