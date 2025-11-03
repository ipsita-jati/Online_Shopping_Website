function App(){
    const name = "Ipsita";
    const age = 22;
    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none'
    };
    return(
        <div>
            <h1>Hello, {name}</h1>
            <p>You are {age} years old</p>
            <p>Next year you'll be {age + 1}</p>
            <button style={buttonStyle}>Click Me</button>
        </div>
    );
}

export default App;
