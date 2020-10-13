import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import UserOder from './Components/UserOder/UserOder/UserOder';

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

        <Router path="/login">
          <Login></Login>
        </Router>

        <Router path="/userOrder">
          <UserOder></UserOder>
        </Router>

      </Switch>
    </Router>

  );
}

export default App;
