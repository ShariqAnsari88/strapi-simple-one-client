import React, { useEffect, useContext } from "react";

import "./Products.scss";
import Product from "./Product/Product";
import { fetchDataFromApi } from "../../../utils/api";
import { Context } from "../../../utils/context";

const Products = () => {
    const { products, setProducts } = useContext(Context);
    useEffect(() => {
        makeApiCall();
    }, []);

    const makeApiCall = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            setProducts(res);
        });
    };
    return (
        <div className="products-container">
            <div className="sec-heading">Most Popular Products</div>
            <div className="products">
                {products?.data?.map((item) => (
                    <Product key={item.id} data={item.attributes} />
                ))}
            </div>
        </div>
    );
};

export default Products;
