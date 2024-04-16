import { CartContainer } from "./styles";
import CartIcon from "../../../assets/CartIcon.svg";
import Image from "next/image";

export function Cart() {
  return (
    <CartContainer>
      <Image src={CartIcon} alt="icon cart" />
      <p>0</p>
    </CartContainer>
  );
}
