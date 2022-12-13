import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [products, setProducts] = useState();

    return (
        <Context.Provider
            value={{
                products,
                setProducts,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;
