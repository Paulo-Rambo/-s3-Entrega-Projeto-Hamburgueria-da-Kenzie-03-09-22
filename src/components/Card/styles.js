import styled from "styled-components";

export const CardDiv = styled.div`
  .cardEffect {
    border-radius: var(--card-radius-1);
    border: solid 2px var(--color-grey-4);
    font-family: Inter;
    color: var(--color-grey-1);
    width: 17.5vw;
    transition: all 0.6s;
  }
  @media (max-width: 420px) {
    .cardEffect {
      width: 280px;
      height: 346px;
    }
  }
  .cardEffect:hover {
    border-color: var(--color-grey-2);
  }

  background-color: white;
  .imgDiv {
    border-radius: var(--card-radius-1) var(--card-radius-1) 0 0;
    background: var(--color-grey-3);
    height: 7vw;
  }
  .descrDiv {
    border-radius: 0 0 var(--card-radius-1) var(--card-radius-1);
    display: flex;
    flex-direction: column;
    gap: 0.6vw;

    text-align: left;
    padding: 2vw 0 1.85vw 1.7vw;
  }
  @media (max-width: 420px) {
    .descrDiv {
      padding: 28px 0 18px 20px;
      height: 65%;
      display: flex;
      gap: 20px;
    }
    .imgDiv {
      height: 120px;
    }
  }
  img {
    height: 100%;
    object-fit: cover;
  }
  h2 {
    font-size: 1vw;
    font-weight: 700;
  }
  h3 {
    font-size: 0.9vw;
    font-weight: 600;
    color: var(--color-price-1);
  }
  p {
    font-size: 0.8vw;
    font-weight: 400;
    color: var(--color-grey-2);
  }
  button {
    font-size: 1.1vw;
    cursor: pointer;
    color: var(--button-text-color-1);
    padding: 0.7vw 1.5vw;
    border-color: transparent;
    background: var(--color-price-1);
    border-radius: var(--button-radius-1);
    transition: all 0.6s;
  }
  button:hover {
    background: var(--color-price-hover);
  }
  @media (max-width: 420px) {
    h2 {
      font-size: 19px;
      font-weight: 500;
    }
    h3 {
      font-size: 17px;
      font-weight: 400;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      color: var(--color-grey-2);
    }
    button {
      font-size: 17px;
      padding: 9px 18px;
    }
  }
`;
