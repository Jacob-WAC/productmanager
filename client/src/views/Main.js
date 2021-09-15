import React, { useEffect, useState } from "react";
import ProductForm from "../componets/ProductForm";
import ProductList from "../componets/ProductList";
import axios from "axios";
const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch((err) => console.error(err));
    }, [loaded]);

    return (
        <div>
            <ProductForm setLoaded={setLoaded} />
            <hr />
            {loaded && <ProductList products={products} />}
        </div>
    );
};
export default Main;
