import { createContext } from "react";

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addToCart: (item) =>{},
    deleteFromCart: (item) => {},
});

export default CartContext