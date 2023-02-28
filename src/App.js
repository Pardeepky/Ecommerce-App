import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Store from "./views/Store";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false)

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <>
      {showCart && <Cart hideCartHandler={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <main className="container">
        <Store />
        <div className="d-flex justify-content-center">
          <button className="btn btn-success">See the Cart</button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
