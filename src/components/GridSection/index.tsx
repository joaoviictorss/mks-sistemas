import { ProductItem } from "../ProductItem";
import { Container, ProductGrid } from "./styles";

import { useState, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
};

export function GridSection() {
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
    <Container>
      <ProductGrid>
        {dataRes?.map((product) => (
          <ProductItem data={product} key={product.id} />
        ))}
      </ProductGrid>
    </Container>
  );
}
