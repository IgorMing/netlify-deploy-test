import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My API KEY: {apiKey}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentação do React
        </a>
      </header>
    </div>
  );
}

export default App;
