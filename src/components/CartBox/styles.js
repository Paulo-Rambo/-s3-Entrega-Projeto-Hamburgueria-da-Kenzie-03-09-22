import styled from "styled-components";

export const ShopCart = styled.aside`
  border-radius: var(--card-radius-1);
  width: var(--container-2);
  height: 75%;
  background-color: var(--color-grey-3);

  header {
    border-radius: var(--card-radius-1) var(--card-radius-1) 0 0;
    background: var(--color-price-1);
    height: 4.5vw;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 var(--container-3);
  }
  @media (max-width: 420px) {
    width: 100%;
    min-height: 300px;
    margin-bottom: 30px;
    header {
      height: 60px;
      padding: var(--container-6);
    }
  }
  .headerTitle {
    color: white;
    font-size: 1.3vw;
    font-weight: 700;
  }
  @media (max-width: 420px) {
    .headerTitle {
      font-size: 18px;
    }
  }
`;
export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20vw;

  h2 {
    font-size: 1.3vw;
    font-weight: 700;
  }
  p {
    font-size: 1.1vw;
    color: var(--color-grey-2);
    font-weight: 600;
  }
  @media (max-width: 420px) {
    height: 300px;
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
`;
