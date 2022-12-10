import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ProductCard from "./Product";

function App() {
    const [products, setProducts] = useState();

    useEffect(() => {
        fetchProducts();
    }, []);

    // const API_KEY =
    //     "06997d8374b41d42b112e3c3a77a26fee328484f6e5833682cda2f12215402aad0f412370c03e116fee852a3844021ce5c052338d0e8882777a2dd491418a8f414fd37f75be7d68f778a898f01462009b597d09cf4e54613445231a4683181882cdde447552cf3380719bdc78b59ac4200d75b9eb497c388ccb51190f4ff2f5f";
    const API_KEY =
        "027bb7c34b9a60c3c79ab8eada87aaed2f1e85de301b4c48167d1905b46d0f3197dfb7bbea315049dd451a24ae489843083825c2eb4f5ab328a9c82bdab3b8725ebaa182c1fdebfc1363b3243820395e17417e50536e6105bb152bc1fcb80e8e411adba6f6bd92f80c864207ab0cb6f6d2915659a69a5c8433ec3ba90898b43f";

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get(
                "https://strapi-simple-one-production.up.railway.app/api/products?populate=*",
                {
                    headers: { Authorization: "bearer " + API_KEY },
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
            <ProductCard data={products?.data?.[0]} />
        </div>
    );
}

export default App;
