import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h2>WIRELESS</h2>
                    <h1>HEADPHONE</h1>
                    <p>
                        For all the feisty troublemakers in the world! Bass up
                        your world with uninterrupted music for upto 8 hours
                        with TRebel Rockerz 450
                    </p>
                    <div className="banner-cta">Shop Now</div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
            <div class="custom-shape-divider-bottom-1670962865">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default Banner;
