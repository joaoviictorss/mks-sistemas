import styled from "styled-components";

export const ContainerProduct = styled.div`
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.5rem;
  max-width: 220px;
  box-shadow: 0px 2px 8px 0px #00000022;

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }

    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
  .img-skeleton {
    height: 130px;
    width: 190px;
    margin: 0.25rem;

  }
  .skeleton {
    opacity: 0.7;
    animation: skeleton-loading 1s linear infinite alternate;
    background-color: #373737;
  }
  .skeleton-text {
    width: 100%;
    height: 0.5rem;
    margin-bottom: 0.25rem;
    border-radius: 8px;
  }

  .skeleton-text:last-child {
    margin-bottom: 0;
    width: 80%;
  }
`;

export const ProductInfos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  padding: 1rem ;

  img {
    width: 7.5rem;;
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
