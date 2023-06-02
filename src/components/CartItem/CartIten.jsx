import { CartDiv } from "./style";

export default function CartItem({ prod, cartList, setCartList }) {
  function removeCartList() {
    let object = cartList.find((obj) => obj.name === prod.name);
    if (object.number > 1) {
      let newList = [...cartList];
      let newListIndex = newList.findIndex((obj) => obj.name === prod.name);
      newList[newListIndex].number--;
      setCartList(() => newList);
    } else {
      let newList = [...cartList];
      let newListIndex = newList.findIndex((obj) => obj.name === prod.name);
      newList.splice(newListIndex, 1);
      setCartList(() => newList);
    }
  }
  return (
    <CartDiv>
      <div className="imgDiv">
        <img src={prod.img} alt={prod.name} />
      </div>
      <div className="mainDiv">
        <div className="descriDiv">
          {prod.name.length > 13 ? (
            <h2>{prod.name.substring(0, 13)}...</h2>
          ) : (
            <h2>{prod.name}</h2>
          )}
          <p>{prod.category}</p>
          <h3>{prod.number}x</h3>
        </div>
        <button onClick={removeCartList}>Remover</button>
      </div>
    </CartDiv>
  );
}
