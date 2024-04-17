import styled from "styled-components";

export const Container = styled.div`
  width: 460px;
  background-color: var(--blue);
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  color: white;

  box-shadow: -5px 0px 6px 0px #00000021;

  @media (max-width: 580px) {
    width: 80%;
  }
`;

export const CheckoutInfos = styled.div`
  padding: 2rem;
  height: 90%;
  display: block;
  display: flex;
  flex-direction: column;

  .infos {
    display: flex;
    justify-content: space-between;

    h2 {
      font-weight: 700;
      font-size: 1.75;
      line-height: 2rem;
    }
  }
`;

export const CloseButton = styled.button`
  border: none;
  width: min-content;
  height: min-content;
  border-radius: 50%;
  background-color: transparent;
`;

export const TotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const CheckoutButton = styled.div`
  background-color: #000000;
  font-weight: 700;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
  align-self: flex-end;
  cursor: pointer;
`;

export const CheckoutItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  overflow: auto;
  padding: 1rem;
  &::-webkit-scrollbar {
  width: 5px;
  border-radius: 8px;
}




`;
