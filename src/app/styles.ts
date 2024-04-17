import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: var(--blue);
`;
export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
`;

export const FirstNameLogo = styled.span`
  font-weight: 600;
  font-size: 2.5rem;
`;
export const SecondNameLogo = styled.span`
  margin-bottom: -10px;
  font-weight: 300;
  font-size: 1.25rem;
`;

export const GridContainer = styled.main`
  margin: auto;
  max-width: 1000px;
  align-self: center;
  @media (max-width: 920px) {
    padding: 2rem 0;
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