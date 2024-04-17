"use client";

import { Footer } from "@/components/Footer";
import {
  Container,
  Logo,
  FirstNameLogo,
  Header,
  SecondNameLogo,
  GridContainer,
  ProductGrid,
} from "./styles";
import { Cart } from "@/components/Cart";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { ProductItem } from "@/components/ProductItem";

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
  return (
    <>
      <Header>
        <Container>
          <Logo>
            <FirstNameLogo>MKS</FirstNameLogo>
            <SecondNameLogo>Sistemas</SecondNameLogo>
          </Logo>
          <Cart />
        </Container>
      </Header>
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
