import React, {useState, useEffect} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";

const ProductEdit = () => {
    const history = useHistory();
    const params = useParams();
    const [productState, setProductState] = useState({
        title: "",
        description: "",
        price: ""
    });
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/product/edit/${params.id}`).then((response) => {
            setProductState({
                title: response.data.title,
                description: response.data.description,
                price: response.data.price,
            })
        }).catch((error) => {
            console.log(error)
        })
    }, []);

    const handleUpdate = () => {
        console.log(productState)
        axios.put(`http://localhost:8000/api/product/update/${params.id}`, productState).then((response) => {
            history.push('/');
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
            <button onClick={() => handleUpdate()}>Update</button>
        </div>
    );
};
export default ProductEdit;
