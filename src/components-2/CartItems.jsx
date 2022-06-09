import React, { useContext } from 'react'
import { cartcontaxt } from "./Maincard";

const Cart_items = ({id , title , description , price, img , quantity  }) => {

const { removeItem , decreaseItem , increseItem }  = useContext(cartcontaxt)



  return (
        <div>
        
       <div className="items-info">
                    <div className="product-img">
                      <img src={img} alt="iamge" />
                    </div>

                    <div className="title">
                      <h2>{title}</h2>
                      <p>{description}</p>
                    </div>
                    <div className="add-minus-quantity">
                      <i className="fas fa-minus minus" onClick={()=>decreaseItem(id)} ></i>
                      <input type="text" placeholder={quantity} disabled />
                      <i className="fas fa-plus add" onClick={()=>increseItem(id)}></i>
                    </div>

                    <div className="price">
                      <h3>{price}₹</h3>
                    </div>

                    <div className="remove-item">
                      <i className="fas fa-trash-alt remove" onClick={()=>removeItem(id)}></i>
                    </div>
                  </div>

                  <hr />
       
        </div>
    )
}

export default Cart_items
