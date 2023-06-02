import { PriceDiv } from "./style";
import { useState, useEffect } from "react";

export default function CartTotal({ cartList, setCartList }) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cartList.reduce((a, b) => a + b.price * b.number, 0).toFixed(2));
  }, [cartList]);

  return (
    <PriceDiv>
      <div className="totalPrice">
        <h3>Total</h3>
        <h3 className="price">R$ {total}</h3>
      </div>
      <button onClick={() => setCartList([])}>Remover todos</button>
    </PriceDiv>
  );
}
