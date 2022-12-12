import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ProductCard from "./Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [products, setProducts] = useState();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get(
                `${process.env.REACT_APP_STRIPE_APP_DEV_URL}/api/products?populate=*`,
                {
                    headers: {
                        Authorization:
                            "bearer " +
                            process.env.REACT_APP_STRIPE_DEV_APP_KEY,
                    },
                }
            );
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    if (!products) return;
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        exact
                        element={<ProductCard data={products?.data?.[0]} />}
                    />
                    <Route
                        path="/paymentSuccess"
                        element={
                            <div style={{ color: "white" }}>
                                Payment Sucessful
                            </div>
                        }
                    />
                    <Route
                        path="/paymentCancel"
                        element={
                            <div style={{ color: "white" }}>Payment Cancel</div>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
