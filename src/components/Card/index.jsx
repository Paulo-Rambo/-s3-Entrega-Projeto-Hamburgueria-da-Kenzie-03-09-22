import { CardDiv } from "./styles";

export default function Card({ iten, setCart, cart, setCartTotalPrice }) {
  function addCartList() {
    let object = cart.find((obj) => obj.name === iten.name);

    if (object) {
      let newCart = [...cart];
      let newObjectIndex = newCart.findIndex((obj) => obj.name === iten.name);
      newCart[newObjectIndex].number++;
      setCart(() => newCart);
      setCartTotalPrice(cart.reduce((a, b) => a + b.price * b.number, 0));
    } else {
      const newIten = {
        name: iten.name,
        category: iten.category,
        price: iten.price,
        img: iten.img,
        number: 1,
      };
      setCart((newCart) => [...newCart, newIten]);
      if (cart.length > 0) {
        setCartTotalPrice(cart.reduce((a, b) => a + b.price * b.number, 0));
      }
    }
  }

  return (
    <CardDiv>
      <div className="cardEffect">
        <div className="imgDiv">
          <img src={iten.img} alt="hamburg"></img>
        </div>
        <div className="descrDiv">
          <h2>{iten.name}</h2>
          <p>{iten.category}</p>
          <h3>{iten.price}</h3>
          <div>
            <button onClick={addCartList}>Adicionar</button>
          </div>
        </div>
      </div>
    </CardDiv>
  );
}
