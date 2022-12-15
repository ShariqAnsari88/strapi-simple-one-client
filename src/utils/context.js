import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [selectedProduct, stSelectedProduct] = useState();
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <Context.Provider
            value={{
                products,
                setProducts,
                categories,
                setCategories,
                selectedProduct,
                stSelectedProduct,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;
