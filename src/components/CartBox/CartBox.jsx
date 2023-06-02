import CartList from "../CartList";
import CartTotal from "../CartTotal";
import { ShopCart, Empty } from "./styles";

export default function CartBox({ cartList, setCartList }) {
  return (
    <ShopCart>
      <header>
        <h2 className="headerTitle">Carrinho de compras</h2>
      </header>
      <main>
        {cartList.length > 0 ? (
          <>
            <CartList cartList={cartList} setCartList={setCartList} />
            <CartTotal cartList={cartList} setCartList={setCartList} />
          </>
        ) : (
          <Empty>
            <h2>Sua sacola está vazia</h2>
            <p>Adicione itens</p>
          </Empty>
        )}
      </main>
    </ShopCart>
  );
}
<h2>Vazio</h2>;
