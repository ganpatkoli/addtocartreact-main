import CartItems from "./CartItems";
import { products } from "./products";
import Scrollbars from "react-custom-scrollbars-2";
const Context = () => {
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>12</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">Total Items </span> items
          in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {products.map((x) => {
                console.log(x);
                return <CartItems key={x.id} {...x} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>Total Ammount₹</span>
          </h3>
          <button>checkout</button>
          <button className="clear-cart">Clear Cart</button>
        </div>
      </section>
    </>
  );
};

export default Context;
