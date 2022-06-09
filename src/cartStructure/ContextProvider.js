import { createContext } from "react";
import "./cart.css";
import Context from "./Context";
import {products} from "./products"

export const contextCreate = createContext()

const ContextProvider = () => {
  return (
   
    <contextCreate.Provider value={products}>
          <Context />
    </contextCreate.Provider>
  );
};

export default ContextProvider;
