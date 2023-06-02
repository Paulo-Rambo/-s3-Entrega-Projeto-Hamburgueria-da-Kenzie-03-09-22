import { useEffect } from "react";
import Card from "../Card";
import { useState } from "react";
import { CardSection, NotFound } from "./style";

export default function CardList({
  products,
  filtered,
  cartAdd,
  cartList,
  setCartTotalPrice,
}) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  let prodItens = filteredProducts.filter(
    (product) =>
      product.category.toLowerCase().includes(filtered.toLowerCase()) ||
      product.name.toLowerCase().includes(filtered.toLowerCase())
  );

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <CardSection>
      {filtered.toLowerCase() === "all" ? (
        filteredProducts.map((listIten) => (
          <Card
            iten={listIten}
            key={listIten.name}
            setCart={cartAdd}
            cart={cartList}
            setCartTotalPrice={setCartTotalPrice}
          />
        ))
      ) : prodItens.length > 0 ? (
        prodItens.map((listIten) => (
          <Card
            iten={listIten}
            key={listIten.name}
            setCart={cartAdd}
            cart={cartList}
          />
        ))
      ) : (
        <NotFound>
          <h2>Nada encontrado!</h2>
        </NotFound>
      )}
    </CardSection>
  );
}
