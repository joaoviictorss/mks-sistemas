"use client";

//hooks
import { useEffect, useState } from "react";

//components
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

//images
import CartIcon from "../assets/CartIcon.svg";

// next functionalities
import { usePathname } from "next/navigation";
import Image from "next/image";

// hooks
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useProducts } from "@/hooks/useProducts";
import { ReactQueryProvider } from "@/components/Provider/ReactQueryProvider";

export default function Home() {
  // fetch data using react query
  const { data } = useProducts();

  const [menuIsActive, setmenuIsActive] = useState(false);
  const pathname = usePathname();

  // on reload menu is closed
  useEffect(() => {
    if (menuIsActive) setmenuIsActive(false);
  }, [pathname]);

  // get-items from local storage
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

      <GridContainer $menuOpen={menuIsActive}>
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
