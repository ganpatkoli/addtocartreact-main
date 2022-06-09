import React, { useContext } from "react";
import Cartitems from "./CartItems";
import { cartcontaxt } from "./Maincard";

const CartContaxt = () => {
  const { items, clearCart , totalAmmount , totalItem } = useContext(cartcontaxt);

  // console.log(items)

  if (items.length === 0) {
    return (

        <>
          <header>
            <div className="continue-shopping">
              <img
                src="./images/arrow.png"
                alt="arrow"
                className="arrow-icon"
              />
              <h3>continue shopping</h3>
            </div>

            <div className="cart-icon">
              <img src="./images/cart.png" alt="cart" />
              <p> {totalItem} </p>
            </div>
          </header>

          <section className="main-cart-section">
            <h1>shopping Cart</h1>
            <p className="total-items">
              you have <span className="total-items-count" > {totalItem} </span>
              items in shopping cart
            </p>

            {/* cart Items */}

            <div className="cart-items">
              <div className="cart-items-container">
              <h1>please add items first</h1>
              </div>
            </div>
            <div className="card-total">
              <h3>
                Cart Total : <span> {totalAmmount} ₹</span>
              </h3>
              <button>checkout</button>
              <button className="clear-cart" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </section>
        </>
    );
  }

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem} </p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count"> {totalItem}</span>
          items in shopping cart
        </p>

        {/* cart Items */}

        <div className="cart-items">
          <div className="cart-items-container">
            {items.map((x) => {
              return <Cartitems key={x.id} {...x} />;
            })}
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart Total : <span> {totalAmmount} ₹</span>
          </h3>
          <button>checkout</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default CartContaxt;
