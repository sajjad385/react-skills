import React, {useState} from "react";
import Product from "./component/client/Product";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import "./App.css";
import ProductDetails from "./component/client/ProductDetails";
import Cart from "./component/client/Cart";
import {useSelector} from "react-redux";


function App() {
    const cartStore = useSelector((state) => state)
    console.log(cartStore);
    const [productList, setProducts] = useState([
        {
            name: "Product Name 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            price: "102",
            category: "LifeStyle",
        },
        {
            name: "Product Name 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            price: "120",
            category: "Home and Decorator",
        },
        {
            name: "Product Name 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            price: "100",
            category: "Electronics",
        },
    ]);

    return (
        <Router>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <Switch>
                <Route exact path="/">
                    <Product productList={productList}/>
                </Route>
                <Route exact path="/product-details/:id">
                    <ProductDetails productList={productList}/>
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
