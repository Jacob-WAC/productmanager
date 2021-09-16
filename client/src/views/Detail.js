import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products/" + id)
            .then((res) => setProduct(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            {product.title}
            <Link to={`/products/edit/${product._id}`}>Edit</Link>
        </div>
    );
};

export default Detail;
