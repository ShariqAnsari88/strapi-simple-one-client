import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import "./Header.scss";
const Header = () => {
    const [scrolled, setScrolled] = useState(false);
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
        <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
            <ul className="left">
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/about")}>About</li>
                <li>Categories</li>
            </ul>
            <div className="center" onClick={() => navigate("/")}>
                JSDEVSTORE.
            </div>
            <div className="right">
                <TbSearch size={18} />
                <CgShoppingCart size={20} />
            </div>
        </header>
    );
};

export default Header;
