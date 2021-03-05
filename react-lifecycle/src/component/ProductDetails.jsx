    import React, { useEffect, useState } from "react";

    const ProductDetails = ({ product }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 1000);
    });
    return (
        <>
        {loading === true ? (
            <div>
            <img
                src={
                "https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
                }
                alt={""}
                style={{ width: "100%", height: "100vh" }}
            />
            </div>
        ) : (
            <div>
            <p>Product Name: {product.name}</p>
            <p>Product Description: {product.description}</p>
            <p>Product Category: {product.category}</p>
            <p>Product Price: {product.price}</p>
            </div>
        )}
        </>
    );
    };
    export default ProductDetails;
