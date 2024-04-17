import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  height: 6.25rem;
  width: 23.75rem;
  border-radius: 0.5rem;
  color: black;
  display: flex;

  @media (max-width: 580px) {
    width: 16rem;
    height: 13.75rem;
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ItemInfos = styled.div`
  display: flex;
  align-items: center;

  p {
    max-width: 30%;
    text-align: start;
  }

  span {
    font-weight: 700;
  }

  .product-photo {
    width: 20%;
  }

  @media (max-width: 580px) {
    flex-direction: column;
    gap: 1rem;
    p {
      max-width: 100%;
      font-weight: 400;
    }

    .product-photo {
      width: 40%;
    }
  }
`;

export const DeleteButton = styled.button`
  position: relative;
  width: 1rem;
  height: 1rem;
  left: 97%;
  bottom: 9px;
  border: none;
  border-radius: 50%;
  background-color: transparent;

  .delete-button-img {
    width: 1rem;
    height: 1rem;
  }

  @media (max-width: 580px) {
    width: 1.5rem;
    bottom: 18px;
    height: 1.5rem;

    .delete-button-img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const ProductInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .prince-and-quantity{
    display: flex;
    gap: 1rem;
    margin-right: 1rem;
  }

  @media (max-width: 580px) {
    flex-direction: column;
    gap: 1rem;
    widows: 100%;
    .prince-and-quantity {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      
    }
  }
`;
export const QuantityInput = styled.div`
  width: 3.15rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  button {
    width: 33.33%;
    height: 100%;
    border: none;
    color: black;
    background-color: transparent;
  }
  span {
    width: 33.33%;
    text-align: center;
  }
  :last-child {
    border-left: 1px solid gray;
  }
  :first-child {
    border-right: 1px solid gray;
  }

  @media (max-width: 580px) {
    height: 2rem;
    width: 6.25rem;
  }
`;

export const Price = styled.div`
  @media (max-width: 580px) {
    font-weight: 700;
    background-color: #373737;
    color: white;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }
`;
