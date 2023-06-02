import styled from "styled-components";

export const CartListDiv = styled.div`
  display: flex;
  margin: 0 var(--container-3);
  padding: 1.7vw 0;
  overflow-y: scroll;
  max-height: 24vw;
  flex-direction: column;
  gap: 1.3vw;
  border-bottom: solid 2px var(--color-grey-4);

  @media (max-width: 420px) {
    max-height: 280px;
    gap: 10px;
    padding: 18px 10px 0px 10px;
  }
`;
