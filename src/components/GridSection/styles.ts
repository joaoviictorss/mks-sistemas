import styled from "styled-components";

export const Container = styled.main`
  margin: auto;
  max-width: 1000px;
  align-self: center;
  @media (max-width: 920px) {
    padding-top: 2rem;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 920px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
