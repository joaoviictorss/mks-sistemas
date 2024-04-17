import { AnimatePresence, motion } from "framer-motion";
import {
  CheckoutButton,
  CheckoutInfos,
  CheckoutItems,
  CloseButton,
  Container,
  TotalDiv,
} from "./styles";
import Image from "next/image";
import CloseCartIcon from "../../assets/CloseCartIcon.svg";
import { CartItem } from "../CartItem";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/product";

interface CartSectionProps {
  closeMenu: () => void;
}

export const CartSection = ({ closeMenu }: CartSectionProps) => {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    "cart-items",
    []
  );

  function calculateTotal(value: ProductInCart[]) {
    return value.reduce((sum, item) => (sum += item.price * item.quantity), 0);
  }

  const cartTotal = calculateTotal(value);

  function handleUptadeQuantity(id: number, quantity: number) {
    const newValue = value.map((item) => {
      if (item.id !== id) return item;
      return { ...item, quantity: quantity };
    });
    updateLocalStorage(newValue);
  }

  function handleDelete(id: number) {
    const newValue = value.filter((item) => {
      if (item.id !== id) return item;
    });
    updateLocalStorage(newValue);
  }

  // Animation
  const cartMenuSlide = {
    initial: {
      x: "100%",
    },
    enter: {
      x: "0%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={cartMenuSlide}
        animate="enter"
        exit="exit"
        initial="initial"
      >
        <Container>
          <CheckoutInfos>
            <div className="infos">
              <h2>
                Carrinho <br />
                de compras
              </h2>
              <CloseButton onClick={closeMenu}>
                <Image src={CloseCartIcon} alt="CloseCardIcon" />
              </CloseButton>
            </div>
            <CheckoutItems>
              {value.map((item) => (
                <CartItem
                  key={item.id}
                  dataProduct={item}
                  handleUptadeQuantity={handleUptadeQuantity}
                  handleDelete={handleDelete}
                />
              ))}
            </CheckoutItems>
            <TotalDiv>
              <h2>Total:</h2>
              <h2>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 0,
                }).format(cartTotal)}
              </h2>
            </TotalDiv>
          </CheckoutInfos>
          <CheckoutButton>Finalizar Compra</CheckoutButton>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};
