import React, { createContext, useReducer , useEffect} from "react";
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
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };




const increment= (id)=>{
  return dispatch({
type: "INCREMENT",
payload:id
  })
}
const decrement= (id)=>{
  return dispatch({
type: "DECREMENT",
payload:id
  })
}




useEffect(() => {
  dispatch({type:"GET_TOTAL"})
  console.log("click");

}, [state.items])




useEffect(() => {
dispatch ({
  type:('GET_AMMOUNT')
})




}, [state.items])





  return (
    <cartcontaxt.Provider value={{ ...state, removeItem, clearCart, increment , decrement  }}>
      <CartContaxt />
    </cartcontaxt.Provider>
  );
};

export default Maincard;
