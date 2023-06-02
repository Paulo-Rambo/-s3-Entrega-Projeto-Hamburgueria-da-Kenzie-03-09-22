import styled from "styled-components";

export const CartDiv = styled.div`
  width: 100%;
  height: 6vw;
  display: flex;

  .imgDiv {
    height: 6vw;
    width: 6vw;
    background: var(--color-grey-4);
    border-radius: var(--card-radius-1);
    object-fit: cover;
    margin-right: 1vw;
  }
  @media (max-width: 420px) {
    height: 80px;
    .imgDiv {
      height: 80px;
      width: 80px;
      margin-right: 18px;
    }
  }
  img {
    max-height: 100%;
  }
  .mainDiv {
    width: 100%;
    padding-top: 0.6vw;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 420px) {
    .mainDiv {
      padding-top: 9px;
    }
  }
  .descriDiv {
    text-align: left;
  }
  .descriDiv > p {
    color: var(--color-grey-2);
    padding-top: 0.6vw;
  }
  h2 {
    font-size: 1vw;
  }
  h3 {
    font-size: 0.8vw;
  }
  p {
    font-size: 0.8vw;
  }
  button {
    cursor: pointer;
    color: var(--color-grey-5);
    font-weight: 500;
    font-size: 0.9vw;
    background: transparent;
    border: none;
    height: 1vw;
  }
  button:hover {
    color: var(--color-grey-4);
  }
  @media (max-width: 420px) {
    h2 {
      font-size: 17px;
    }
    h3 {
      font-size: 16px;
    }
    p {
      font-size: 15px;
    }
    button {
      cursor: pointer;
      color: var(--color-grey-5);
      font-weight: 500;
      font-size: 17px;
      background: transparent;
      border: none;
      height: 1vw;
    }
  }
`;
