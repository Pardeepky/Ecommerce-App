import { useContext } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { Outlet } from "react-router-dom";
import CartContext from "./context/cart-context";

function App() {
 
  const cartCtx = useContext(CartContext);

  return (
    <>
      {cartCtx.showCart && <Cart hideCartHandler={cartCtx.hideCartHandler} />}
      <Header showCartHandler={cartCtx.showCartHandler} />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
