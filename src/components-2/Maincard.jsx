import React, { createContext, useReducer, useEffect } from "react";
import "./cart.css";
import Products from "./Products";
import CartContaxt from "./CartContaxt";
import { reducer } from "./Reducer";

export const cartcontaxt = createContext();

const initialState = {
  items: Products,
  totalItems: 0,
  totalAmmount: 0,
};

// contaxt ka use tb hota he jb parend component se child component ko data send krna ho, noramaly data parent to child send hota he
// cart contaxt k through value maint cart  cart contaxt mec sendvkriv jacri h

const Maincard = () => {
  // const [items, setItems] = useState(Products)

  const [state, dispatch] = useReducer(reducer, initialState);

  // dispatch means what axction perform
  // dispatchme jo bhi type denge  use reducer ka action agument fetch krega

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVEITEM",
      payload: id,
    });
  };

  const clearCart = () => {
    return dispatch({
      type: "CLEARCART",
    });
  };

  const increseItem = (id) => {
    return dispatch({
      type: "INCREASE",
      payload: id,
    });
  };

  const decreaseItem = (id) => {
    return dispatch({
      type: "DECREASE",
      payload: id,
    });
  };

  useEffect(() => {
    dispatch({ type: "GETTOTAL" });
  }, [state.items]);

  return (
    <cartcontaxt.Provider
      value={{ ...state, removeItem, clearCart, decreaseItem, increseItem }}
    >
      <CartContaxt />
    </cartcontaxt.Provider>
  );
};

export default Maincard;
