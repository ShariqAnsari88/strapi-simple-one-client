import React from "react";

import "./Category.scss";

import headphone from "../../../assets/cat/headphones.webp";
import smartWatch from "../../../assets/cat/smart-watch.webp";
import speaker from "../../../assets/cat/speakers.webp";
import airpods from "../../../assets/cat/airpods.webp";

const Category = () => {
    return (
        <div className="shop-by-category">
            <div className="sec-heading">Shop by Category</div>
            <div className="categories">
                <div className="category">
                    <div className="img-sec">
                        <img src={headphone} />
                        <div className="bg" />
                    </div>
                    <div className="title">Headphones</div>
                </div>

                <div className="category">
                    <div className="img-sec">
                        <img src={smartWatch} />
                        <div className="bg" />
                    </div>
                    <div className="title">Smart Watches</div>
                </div>

                <div className="category">
                    <div className="img-sec">
                        <img src={speaker} />
                        <div className="bg" />
                    </div>
                    <div className="title">Bluetooth Speakers</div>
                </div>

                <div className="category">
                    <div className="img-sec">
                        <img src={airpods} />
                        <div className="bg" />
                    </div>
                    <div className="title">Airpods</div>
                </div>
            </div>
        </div>
    );
};

export default Category;
