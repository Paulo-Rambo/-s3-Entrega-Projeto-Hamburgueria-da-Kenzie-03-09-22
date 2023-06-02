import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 5vw;
  background: var(--color-grey-3);
  padding: var(--container-4);
  margin-bottom: 1.7vw;

  .container-right {
    width: var(--container-2);
  }
  section {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 420px) {
    height: 135px;
    margin-bottom: 20px;
    section {
      flex-direction: column;
    }
  }
  form {
    position: relative;
  }
  input {
    width: 100%;
    height: 3.5vw;
    border-style: solid;
    border-radius: var(--button-radius-1);
    border-color: var(--color-grey-4);
    padding-left: 1vw;
  }
  input::placeholder {
    color: var(--color-grey-4);
    font-size: 1.2vw;
  }
  button {
    position: absolute;
    font-size: 1.1vw;
    right: 0.7vw;
    top: 0.5vw;
    cursor: pointer;
    color: var(--button-text-color-1);
    padding: 0.5vw 1.2vw;
    border-color: transparent;
    background: var(--color-price-1);
    border-radius: var(--button-radius-1);
    transition: all 0.6s;
  }
  button:hover {
    background: var(--color-price-hover);
  }
  @media (max-width: 420px) {
    section {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
    }
    .divForm {
      width: 100%;
    }
    form {
      width: 100%;
    }
    .container-right {
      width: 100%;
    }
    input {
      width: 100%;
      height: 60px;
      padding-left: 16px;
      font-size: 18px;
    }
    input::placeholder {
      font-size: 18px;
    }
    button {
      position: absolute;
      font-size: 17px;
      right: 9px;
      top: 8px;
      cursor: pointer;
      padding: 9px 18px;
    }
  }
  .imgDiv {
    width: 12vw;
  }
  img {
    width: 100%;
  }
  @media (max-width: 420px) {
    .imgDiv {
      width: 140px;
    }
  }
`;
