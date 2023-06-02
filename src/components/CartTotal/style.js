import styled from "styled-components";

export const PriceDiv = styled.div`
  margin: 0 var(--container-3);
  padding: 1.5vw 0;
  @media (max-width: 420px) {
    padding: 18px 10px 18px 10px;

    button {
      height: 60px;
      font-size: 18px;
    }
  }
  .totalPrice {
    font-size: 1vw;
    display: flex;
    justify-content: space-between;
  }
  .price {
    color: var(--color-grey-2);
  }
  button {
    margin-top: 1.2vw;
    font-size: 1.2vw;
    cursor: pointer;
    padding: 1.5vw 1.5vw;
    width: 100%;
    border-radius: var(--button-radius-1);
    border: none;
    background: var(--color-grey-4);
    color: var(--color-grey-2);
    transition: all 0.6s;
  }

  button:hover {
    color: var(--color-grey-3);
    background: var(--color-grey-5);
  }
  @media (max-width: 420px) {
    button {
      height: 60px;
      font-size: 18px;
      margin-top: 18px;
    }
    .totalPrice > h3 {
      font-size: 17px;
    }
  }
`;
