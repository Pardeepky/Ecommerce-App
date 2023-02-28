import Modal from "../UI/Modal";
import classes from "./cart.module.css";
import CartItem from "./CartItem";
import {cartElements} from '../../assets/data'
import { useContext } from "react";
import CartContext from "../../context/cart-context";

const Cart = (props) => {

  const cartCtx = useContext(CartContext);

  const data = cartCtx.items.map((item) => (
    <CartItem
      id={item.id}
      key={item.id}
      name={item.title}
      quantity={item.quantity}
      price={item.price}
    ></CartItem>
  ));

  const cartItems = <ul className={classes["cart-items"]}>{data}</ul>;
  return (
    <Modal hideCartHandler={props.hideCartHandler} >
      <span style={{float: 'right', fontSize: '2rem', cursor: 'pointer'}} className="m-1" onClick={props.hideCartHandler}>x</span>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>$ {cartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button} >Purchase</button>
      </div>
    </Modal>
  );
};

export default Cart;