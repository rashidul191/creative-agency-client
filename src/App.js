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
import ServiceList from './Components/UserOder/ServiceList/ServiceList/ServiceList';
import Review from './Components/UserOder/Review/Review';

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


        <Router path="/servicesList">
          <ServiceList></ServiceList>
        </Router>

        <Router path="/review">
          <Review></Review>
        </Router>

      </Switch>
    </Router>

  );
}

export default App;
