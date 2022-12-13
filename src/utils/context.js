import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [selectedProduct, stSelectedProduct] = useState();

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
