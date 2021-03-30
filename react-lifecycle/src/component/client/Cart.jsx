import React from "react";
import {Container} from "@material-ui/core";
import {useSelector} from "react-redux";

const Cart = () => {
    const cartStore = useSelector(state => state)
    return (
        <Container>
            Your Cart
            <p>Cart items: {cartStore.cartStore.cart}</p>
        </Container>
    )
}
export default Cart