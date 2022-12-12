import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import { fetchDataFromApi } from "./utils/api";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
    useEffect(() => {
        makeApiCall();
    }, []);

    const makeApiCall = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {});
    };

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route
                    path="/"
                    exact
                    element={<ProductCard data={products?.data?.[0]} />}
                />
                <Route
                    path="/paymentSuccess"
                    element={
                        <div style={{ color: "white" }}>Payment Sucessful</div>
                    }
                />
                <Route
                    path="/paymentCancel"
                    element={
                        <div style={{ color: "white" }}>Payment Cancel</div>
                    }
                /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
