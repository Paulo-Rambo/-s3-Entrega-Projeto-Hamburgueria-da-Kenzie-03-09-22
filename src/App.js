import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/CardList";
import HeaderContent from "./components/Header";
import CartBox from "./components/CartBox/CartBox";
import Loading from "./components/Loading";
import { getList } from "../src/axios/axios";

function App() {
  const [rendered, setRendered] = useState(false);
  const [products, setProducts] = useState([]);
  const [productFilter, setProductFilter] = useState("All");
  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  function setList(response) {
    setProducts(response.data);
    setRendered(true);
  }
  useEffect(() => {
    getList(setList);
  }, []);

  return (
    <div className="App">
      <HeaderContent filtered={setProductFilter} />
      <main className="mainContainer">
        {rendered ? (
          <CardList
            products={products}
            filtered={productFilter}
            cartAdd={setCartProducts}
            cartList={cartProducts}
            setCartTotalPrice={setCartTotalPrice}
          />
        ) : (
          <Loading />
        )}
        <CartBox
          cartList={cartProducts}
          setCartList={setCartProducts}
          setcartTotalPrice={setCartTotalPrice}
          cartTotalPrice={cartTotalPrice}
        />
      </main>
    </div>
  );
}

export default App;
