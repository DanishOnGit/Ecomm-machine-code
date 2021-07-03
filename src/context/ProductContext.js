import { createContext, useContext, useReducer } from "react";
import { productListingPageReducer } from "./productListingPageReducer";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const initialState = {
    showFullInventory: true,
    filterBy:false,
    sortBy: null,
    filterBy: { size: [], brands: [] },
    productsList: [],
  };
  const [state, dispatch] = useReducer(productListingPageReducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
