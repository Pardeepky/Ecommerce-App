import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Store from "./views/Store";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Store />
        <div className="d-flex justify-content-center">
          <button className="btn btn-success">See the Cart</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
