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
import Cart from "./containers/cart";

function App() {

    const history = useHistory();

    return (
        <Router>
            <div className='navbar'>
                <div className="menu">
                    <Link to="/" className='link'>Home</Link>
                    <Link to="/cart" className='link'>Cart</Link>
                </div>
            </div>

            <Switch>
                <Route exact path="/">
                    <Product/>
                </Route>
                <Route exact path="/product-details/:id">
                    <ProductDetails/>
                </Route>
                <Route exact path="/cart">
                    <Cart/>
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