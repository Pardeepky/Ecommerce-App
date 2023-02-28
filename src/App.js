import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Store from "./views/Store";
import Cart from "./components/Cart/Cart";
import About from "./views/About";
import Home from "./views/Home";
import CartProvider from "./context/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false)

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <CartProvider>
      {showCart && <Cart hideCartHandler={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <main className="container">
        <Store />
        <div className="d-flex justify-content-center">
          <button className="btn btn-success" onClick={showCartHandler}>See the Cart</button>
        </div>
        {/* <About />
        <Home /> */}
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
