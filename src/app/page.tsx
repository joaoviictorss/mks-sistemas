"use client";

import { useEffect, useState } from "react";
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
import { Product } from "@/types/product";
import { ProductItem } from "@/components/ProductItem";
import { CartSection } from "@/components/CartSection";

import CartIcon from "../assets/CartIcon.svg";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function Home() {
  const [dataRes, setDataRes] = useState<Product[]>();
  useEffect(() => {
    fetch(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok!");
        }
        return response.json();
      })
      .then((data) => {
        setDataRes(data.products);
      })
      .catch((error) => {
        console.error("An error occourred: ", error);
      });
  }, []);

  const [menuIsActive, setmenuIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (menuIsActive) setmenuIsActive(false);
  }, [pathname]);

  const { value } = useLocalStorage("cart-items", []);

  return (
    <>
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
        <CartSection closeMenu={() => {setmenuIsActive(!menuIsActive)}} />
      )}

      <GridContainer>
        <ProductGrid>
          {dataRes
            ? dataRes.map((product) => (
                <ProductItem data={product} key={product.id} />
              ))
            : Array.from({ length: 8 }).map((_, i) => <ProductItem key={i} />)}
        </ProductGrid>
      </GridContainer>

      <Footer />
    </>
  );
}
