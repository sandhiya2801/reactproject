import logo from './logo.svg';
import './App.css';
import Header from './header.js';

function App() {
  return (

    
    <div className="App">

      <Header />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          welcome to react project3
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
