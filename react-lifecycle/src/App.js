import React, {useState } from "react";
import Product from "./component/Product";
import ProductDetails from "./component/ProductDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";

function App() {
  const [productList, setProducts] = useState([
    {
      name: "Product Name 1",
      description: "lorem      ipsum",
      price: "1100",
      category: "LifeStyle",
    },
    {
      name: "Product Name 2",
      description: "lorem  ipsum",
      price: "120",
      category: "Home and Decorator",
    },
    {
      name: "Product Name 3",
      description: "lorem lorem ipsum lorem ipsum ipsum",
      price: "100",
      category: "Electronics",
    },
  ]);

  return (
    <Router>
      <Link to="/">Home</Link>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <Link to="/404">404</Link>
      <Switch>
        <Route exact path="/">
          <Product productList={productList} />
        </Route>
        <Route exact path="/product-details/:id">
          <ProductDetails productList={productList} />
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
