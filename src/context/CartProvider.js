import axios from "axios";
import { useState } from "react";
import CartContext from "./cart-context";

const url = 'https://crudcrud.com/api/8862b809c23c4c3f9386cdef02a0ddc2/'

const CartProvider = (props) => {

    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const [showCart, setShowCart] = useState(false)

    const showCartHandler = () => {
        setShowCart(true);
    }

    const hideCartHandler = () => {
        setShowCart(false);
    }

    const addToCart = async (addItem, user) => {
        try {
            const index = items.findIndex((item) => item.id === addItem.id);
            if (index > -1) {
                window.alert("Item is already added to cart")
                return;
            } else {
                const res = await axios.post(url + JSON.parse(user), addItem)
                if (res.status) {
                    setItems([...items, addItem]);
                    setTotalAmount(totalAmount + addItem.price * addItem.quantity);
                } else {
                    alert('Something went wrong');
                }
            }
        } catch (error) {
            console.log(error)
        }
    };

    const deleteFromCart = async (item, user) => {
        try {
            const res = await axios.delete(`${url}${JSON.parse(user)}/${item.id}`)
            if (res.status) {
                fetchCartItem(user);
            } else {
                window.alert('Something Went Wrong')
            }
        } catch (err) {
            console.log(err);
        }
        setTotalAmount(totalAmount - item.price * item.quantity);
    }

    const addUserToLocal = (user) => {
        const enteredUserName = user.replace(/[@.]/g, "");
        localStorage.setItem('userName', JSON.stringify(enteredUserName))
    }

    const fetchCartItem = async (user) => {
        try {
            const res = await axios.get(`${url}${JSON.parse(user)}`)
            if (res.status) {
                setItems(res.data);
                const amount = res.data.map((item) => item.price * item.quantity);
                const totalAmount = amount.reduce((cur, next) => {
                    return cur + next;
                }, 0)
                setTotalAmount(totalAmount);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const cartContext = {
        items: items,
        totalAmount: totalAmount,
        addToCart: addToCart,
        deleteFromCart: deleteFromCart,
        showCart: showCart,
        showCartHandler: showCartHandler,
        hideCartHandler: hideCartHandler,
        addUser: addUserToLocal,
        fetchCartItem: fetchCartItem
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider