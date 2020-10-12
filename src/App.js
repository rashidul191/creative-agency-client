import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <Router>
      <Switch>

        <Router exact path="/">
          <Home></Home>
        </Router>

        <Router path="/home">
          <Home></Home>
        </Router>

      </Switch>
    </Router>

  );
}

export default App;
