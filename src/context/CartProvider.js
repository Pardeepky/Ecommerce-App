import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {

    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addToCart = (addItem) => {
        try {
            const index = items.findIndex((item) => item.id === addItem.id);
            if (index > -1) {
                window.alert("Item is already added to cart")
            } else {
                setItems([...items, addItem]);
                setTotalAmount(totalAmount + addItem.price * addItem.quantity);
            }
        } catch (error) {
            console.log(error)
        }
    };

    const deleteFromCart = (item) => {
        setItems(items.filter((items) => items.id !== item.id))
        setTotalAmount(totalAmount - item.price * item.quantity);
    }

    const cartContext = {
        items: items,
        totalAmount: totalAmount,
        addToCart: addToCart,
        deleteFromCart: deleteFromCart,
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider