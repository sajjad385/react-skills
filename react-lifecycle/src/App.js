import React, { useState } from "react";
import Product from "./component/products/";
import ProductCreate from "./component/products/create.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
      <Switch>
        <Route exact path="/">
          <Product />
        </Route>
        <Route exact path="/create">
          <ProductCreate />
        </Route>
        <Route exact path="/edit/:id">
          <ProductCreate />
        </Route>
        <Route exact path="/404">
          <p>404 Page</p>
        </Route>
        <Route exact path="*" render={() => <Redirect to="/404" />} />
      </Switch>
    </Router>
  );
}

export default App;
