import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <ul className="left">
                    <li onClick={() => navigate("/")}>Home</li>
                    <li onClick={() => navigate("/about")}>About</li>
                    <li>Categories</li>
                </ul>
                <div className="center" onClick={() => navigate("/")}>
                    JSDEVSTORE.
                </div>
                <div className="right">
                    <TbSearch size={20} onClick={() => setSearchModal(true)} />
                    <AiOutlineHeart size={20} />
                    <CgShoppingCart size={20} />
                </div>
            </header>
            {searchModal && <Search setSearchModal={setSearchModal} />}
        </>
    );
};

export default Header;
