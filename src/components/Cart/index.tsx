import { CartContainer } from "./styles";
import CartIcon from "../../assets/CartIcon.svg";
import Image from "next/image";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface CartProps {
  onClick?: () => void;
}

export function Cart(onClick: CartProps) {
  const { value } = useLocalStorage("cart-items", []);

  return (
    <CartContainer>
      <Image src={CartIcon} alt="icon cart" />
      <p>{value.length || 0}</p>
    </CartContainer>
  );
}