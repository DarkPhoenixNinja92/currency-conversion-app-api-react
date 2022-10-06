import logo from './logo.svg';
import './App.css';

function App() {
  const api = 'https://v6.exchangerate-api.com/v6/2fefdf9a750573c0c4d6e10f/latest/USD';

  fetch(api)
  .then(response => response.json())
  .then(res => console.log(res))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
