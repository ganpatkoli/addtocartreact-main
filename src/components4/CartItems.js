import {  useContext } from "react";
import { contextCreate } from "./ContextProvider";
import "./cart.css";
const CartItems = ({ id, title, description, price, img, quantity }) => {

  const {removeItem, Increment, Decrement} = useContext(contextCreate)

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="iamge" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={()=>Decrement(id)} ></i>
          <input type="text" disabled  placeholder={quantity}/>
          <i className="fas fa-plus add" onClick={(id)=>Increment(id)} ></i>
        </div>

        <div className="price">
          <h3>{price}</h3>
        </div>

        <div className="remove-item">
          <i className="fas fa-trash-alt remove" onClick={()=>removeItem(id)}></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default CartItems;
