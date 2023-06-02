import styled from "styled-components";

export const CardSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 67%;
  gap: 1vw;

  @media (max-width: 420px) {
    margin-bottom: 20px;
    width: 100%;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 17px;
  }
`;
export const NotFound = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;
