import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import Routers
import Navbar from "./components/navbar.component";
import Main from "./components/main";
import UsersList from "./components/exercises-list.component";
import EditUser from "./components/edit-exercise.component";
import CreateUser from "./components/create-exercise.component";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <br />
        <Route path="/" exact component={Main} />
        <Route path="/list" exact component={UsersList} />
        <Route path="/edit/:id" component={EditUser} />
        <Route path="/create" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
