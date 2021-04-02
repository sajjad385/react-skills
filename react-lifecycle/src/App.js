import React, {useEffect, useState} from "react";
import Product from "./containers/products/product";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect, useHistory,
} from "react-router-dom";
import "./App.css";
import ProductDetails from "./containers/products/productDetails";
import axios from "axios";

function App() {

    const history = useHistory();


    return (
        <Router>
            <Link to="/">Home</Link>
            <Link to="/create">Cart</Link>
            <Switch>
                <Route exact path="/">
                    <Product/>
                </Route>
                <Route exact path="/product-details/:id">
                    <ProductDetails/>
                </Route>
                <Route exact path="/404">
                    <p>404 Page</p>
                </Route>
                <Route exact path="*" render={() => <Redirect to="/404"/>}/>
            </Switch>
        </Router>
    );
}

export default App;