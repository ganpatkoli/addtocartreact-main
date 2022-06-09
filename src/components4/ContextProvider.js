import { createContext, useReducer } from "react";
import "./cart.css";
import Context from "./Context";
import { products } from "./products";
import { reducer } from "./reducer";
export const contextCreate = createContext();

const intialvalue = {
  item: products,
  totalItem: 0,
  totalProduct: 0,
};
const ContextProvider = () => {
  const [state, dispatch] = useReducer(reducer, intialvalue);

  // RemoveItem

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVEITEM",
      payload: id,
    });
  };

// increament

const Increment = (id) => {
  return dispatch({
    type: "INCREMENT",
    payload: id,
  });
};

const Decrement = (id) => {
  return dispatch({
    type: "INCREMENT",
    payload: id,
  });
};








  return (
    <contextCreate.Provider value={{ ...state, removeItem, Increment, Decrement }}>
      <Context />
    </contextCreate.Provider>
  );
};

export default ContextProvider;
