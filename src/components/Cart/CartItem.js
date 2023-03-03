import { useContext } from 'react';
import CartContext from '../../context/cart-context';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  const handleDelete = (props) => {
    const user = localStorage.getItem('userName')
    cartCtx.deleteFromCart(props, user);
  }

  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.quantity}</span>
        </div>
      </div>
        <button className='btn btn-danger' onClick={() => handleDelete(props)}>Delete</button>
    </li>
  );
};

export default CartItem;