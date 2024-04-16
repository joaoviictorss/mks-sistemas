import Image from "next/image";
import ShoppingIcon from "../../assets/shoppingIcon.svg";
import { ButtonBuyItem, Container, ProductInfos } from "./styles";

type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
};

interface ProductItemProps {
  data: Product;
  loading?: string;
}

export function ProductItem({ data }: ProductItemProps) {
  return (
    <Container>
      <ProductInfos>
        <img src={data.photo} alt={data.name} />
        <div>
          <span>{data.name}</span>
          <div className="price">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 0,
            }).format(data.price)}
          </div>
        </div>
        <p>{data.description}</p>
      </ProductInfos>
      <ButtonBuyItem>
        <Image src={ShoppingIcon} alt="ShoppingIcon" />
        Comprar
      </ButtonBuyItem>
    </Container>
  );
}
