import React, { useState, createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Contact/Contact';
import TopBlog from './TopBlog/TopBlog';
import AddBlog from './AddBlog/AddBlog';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Login from './Login/Login';
import PrivateRoute from './Login/PrivateRoute';import Blog from './Blog/Blog';
;

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <PrivateRoute path="/blog">
            <TopBlog />
          </PrivateRoute>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <AddBlog />
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin />
          </Route>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
