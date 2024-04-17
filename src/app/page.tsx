"use client";

import { ReactNode, useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import {
  Container,
  Logo,
  FirstNameLogo,
  Header,
  SecondNameLogo,
  GridContainer,
  ProductGrid,
  CartContainer,
} from "./styles";
import { ProductItem } from "@/components/ProductItem";
import { CartSection } from "@/components/CartSection";

import CartIcon from "../assets/CartIcon.svg";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useProducts } from "@/hooks/useProducts";
import { ReactQueryProvider } from "@/components/Provider/ReactQueryProvider";
import { Product } from "@/types/product";

export default function Home() {
  const { data } = useProducts();
  console.log(data);

  const [menuIsActive, setmenuIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (menuIsActive) setmenuIsActive(false);
  }, [pathname]);

  const { value } = useLocalStorage("cart-items", []);

  return (
    <ReactQueryProvider>
      <Header>
        <Container>
          <Logo>
            <FirstNameLogo>MKS</FirstNameLogo>
            <SecondNameLogo>Sistemas</SecondNameLogo>
          </Logo>

          <CartContainer
            onClick={() => {
              setmenuIsActive(!menuIsActive);
            }}
          >
            <Image src={CartIcon} alt="icon cart" />
            <p>{value.length || 0}</p>
          </CartContainer>
        </Container>
      </Header>

      {menuIsActive && (
        <CartSection
          closeMenu={() => {
            setmenuIsActive(!menuIsActive);
          }}
        />
      )}

      <GridContainer>
        <ProductGrid>
          {data
            ? data?.products.map((product) => (
                <ProductItem data={product} key={product.id} />
              ))
            : Array.from({ length: 8 }).map((_, i) => <ProductItem key={i} />)}
        </ProductGrid>
      </GridContainer>

      <Footer />
    </ReactQueryProvider>
  );
}
