import "./App.css";

import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import Fib from "./Fib";
import logo from "./logo.svg";
import OtherPage from "./OtherPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Fibonacci calculator</p>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other page</Link>
        </header>
      </div>
      <div>
        <Route exact path="/" component={Fib} />
        <Route path="/otherpage" component={OtherPage} />
      </div>
    </Router>
  );
}

export default App;
