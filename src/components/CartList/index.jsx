import CartItem from "../CartItem/CartIten";
import { CartListDiv } from "./styles";

export default function CartList({ cartList, setCartList }) {
  return (
    <CartListDiv>
      {cartList.length > 0
        ? cartList.map((iten) => (
            <CartItem
              prod={iten}
              key={iten.name}
              cartList={cartList}
              setCartList={setCartList}
            />
          ))
        : ""}
    </CartListDiv>
  );
}
