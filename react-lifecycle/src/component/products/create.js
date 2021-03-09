import axios from "axios";
import React, {useState} from "react";

const ProductCreate = () => {

    const [productState, setProductState] = useState({
        title: "",
        description: "",
        price: ""
    });
    const handleSubmit = () => {


        console.log(productState)

        axios.post("http://localhost:8000/api/product/store", productState).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error.response);
        });
    };

    return (
        <div>

            <input
                name="title"
                type="text"
                value={productState.title}
                placeholder="Enter Product Title"
                onChange={(e) =>
                    setProductState({...productState, title: e.target.value})
                }
            />
            <input
                name="description"
                type="text"
                value={productState.description}
                placeholder="Enter Product Description"
                onChange={(e) =>
                    setProductState({...productState, description: e.target.value})
                }
            />

            <input
                name="price"
                type="number"
                value={productState.price}
                placeholder="Enter Product Price"
                onChange={(e) =>
                    setProductState({...productState, price: e.target.value})
                }
            />
            <button onClick={() => handleSubmit()}>Submit</button>
        </div>
    );
};
export default ProductCreate;