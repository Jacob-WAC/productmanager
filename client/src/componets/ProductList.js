import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = (props) => {
    const deletePerson = (id) => {
        axios
            .delete("http://localhost:8000/api/products/" + id)
            .then((res) => {})
            .catch((err) => console.error(err));
        props.setLoaded(false);
    };

    return (
        <div>
            {props.products.map((product, i) => (
                <p key={i}>
                    <Link to={`/products/${product._id}`}>{product.title}</Link>{" "}
                    |{" "}
                    <button
                        onClick={(e) => {
                            deletePerson(product._id);
                        }}
                    >
                        Delete
                    </button>
                </p>
            ))}
        </div>
    );
};
export default ProductList;
