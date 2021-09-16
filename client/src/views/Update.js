import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id).then((res) => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        });
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:8000/api/products/" + id, {
                title,
                price,
                description,
            })
            .then((res) => console.log(res))
            .catch((err) => console.error(err));

        history.push(`/products/`);
    };

    return (
        <form onSubmit={updateProduct}>
            <p>
                <label>Title</label>
                <br />
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </p>
            <p>
                <label>Price</label>
                <br />
                <input
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
            </p>
            <p>
                <label>Description</label>
                <br />
                <input
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
            </p>
            <input type="submit" />
        </form>
    );
};

export default Update;
