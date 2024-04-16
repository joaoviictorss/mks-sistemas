import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.5rem;
  max-width: 220px;
  box-shadow: 0px 2px 8px 0px #00000022;
 
`;

export const ProductInfos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  img {
    width: 60%;
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    gap: 0.5rem;
    width: 100%;
    justify-content: space-between;
    span {
      font-weight: 400;
    }
    .price {
      background-color: #373737;
      padding: 0.25rem;
      color: white;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      max-height: 1.75rem;
      max-width: min-content;
    }
  }
  p {
    font-size: 0.625rem;
    font-weight: 300;
    margin-top: auto;
  }
`;

export const ButtonBuyItem = styled.button`
  border: none;
  background-color: var(--blue);
  padding: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
