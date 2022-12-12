import React from "react";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";

import "./Header.scss";
const Header = () => {
    return (
        <header className="main-header">
            <ul className="left">
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="center">JSDEVSTORE.</div>
            <div className="right">
                <TbSearch size={18} />
                <CgShoppingCart size={20} />
            </div>
        </header>
    );
};

export default Header;
