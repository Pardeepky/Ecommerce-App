import Modal from "../UI/Modal";
import classes from "./cart.module.css";
import CartItem from "./CartItem";
import {cartElements} from '../../assets/data'

const Cart = (props) => {

  const data = cartElements.map((item) => (
    <CartItem
      id={Math.random().toString()}
      key={item.id}
      name={item.title}
      amount={item.quantity}
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
        <span>$ 0</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button} >Purchase</button>
      </div>
    </Modal>
  );
};

export default Cart;