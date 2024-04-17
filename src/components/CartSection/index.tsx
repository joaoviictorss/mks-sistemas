import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Cart } from "../Cart";
import { Container } from "./styles";

export const CartSection = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <Cart />
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={cartMenuSlide}
            animate="enter"
            exit="exit"
            initial="initial"
          >

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
