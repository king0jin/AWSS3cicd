import logo from './logo.svg';
import './App.css';
import React, {Fragment} from 'react';

function App() {
  return (
    <div className="App">
      <Fragment>
        <h1>hello! Uploadfile AWS S3_bucket! </h1>
      </Fragment>
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
