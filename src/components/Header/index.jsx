import { useState } from "react";
import { Header } from "./style";

export default function HeaderContent({ filtered }) {
  const [filterInput, setFilterInput] = useState("");

  function actionFilter(event) {
    filtered(filterInput);
    event.preventDefault();
    setFilterInput("");
  }

  return (
    <Header>
      <section>
        <div className="imgDiv">
          <img src="logo.svg" alt="Burger Kenzie"></img>
        </div>
        <div className="divForm">
          <form onSubmit={actionFilter}>
            <div className="container-right">
              <input
                type="text"
                placeholder="Digitar pesquisa"
                value={filterInput}
                onChange={(event) => setFilterInput(event.target.value)}
              />
              <button type="submit">Pesquisar</button>
            </div>
          </form>
        </div>
      </section>
    </Header>
  );
}
