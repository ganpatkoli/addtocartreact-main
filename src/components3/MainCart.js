import { createContext, useReducer } from "react";
import "./cart.css";
import Context from "./Context";
import { reducer } from "../components-2/Reducer";
import { products } from "../components-2/Products";

export const createCartContext = createContext();

const intialState = {
  item: products,
  totalAmmount: 0,
  totalItems: 0,
};
const Cart = () => {

  const [state, dispatch] = useReducer(reducer, intialState);

//   const removeItem = (id) => {
//     return dispatch({
//       type: "REMOVEITEM",
//       payload: id,
//     });
//   };

// const Increase=(id)=>{
// return dispatch({
//   type : 'INCREASE',
//   payload: id
// })
// }


  return (
    <createCartContext.Provider value={{ ...state }}>
      <Context />
    </createCartContext.Provider>
  );
};

export default Cart;
