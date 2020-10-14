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
import AdminServiceList from './Components/AdminPanel/AdminPlane/AdminServiceList';
import AddService from './Components/AdminPanel/AddService/AddService';
import MakeAdmin from './Components/AdminPanel/MakeAdmin/MakeAdmin';
import NoMatch from './Components/NoMatch/NoMatch';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/userOrder">
            <UserOder></UserOder>
          </PrivateRoute>


          <PrivateRoute path="/servicesList">
            <ServiceList></ServiceList>
          </PrivateRoute>

          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>

          <PrivateRoute path="/adminServiceList">
            <AdminServiceList></AdminServiceList>
          </PrivateRoute>

          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>

          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>

          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
      </Router>

    </UserContext.Provider>

  );
}

export default App;
