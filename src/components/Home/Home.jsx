import React from "react";

import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category />
                </div>
            </div>
        </div>
    );
};

export default Home;
