import Image from "next/image";
import {
  Container,
  DeleteButton,
  ItemInfos,
  Price,
  ProductInfos,
  QuantityInput,
} from "./styles";
import CloseCartIcon from "../../assets/CloseCartIcon.svg";
import { ProductInCart } from "@/types/product";
import { useEffect, useState } from "react";

interface CartItemProps {
  dataProduct: ProductInCart;
  handleUptadeQuantity(id: number, quantity: number): void;
}

export function CartItem({ dataProduct, handleUptadeQuantity }: CartItemProps) {
  const [productQuantity, setProductQuantity] = useState(dataProduct.quantity);

  useEffect(() => {
    handleUptadeQuantity(dataProduct.id, productQuantity);
  }, [productQuantity]);

  return (
    <Container>
      <DeleteButton>
        <Image src={CloseCartIcon} alt={""} className="delete-button-img" />
      </DeleteButton>
      <ItemInfos>
        <img src={dataProduct.photo} className="product-photo" />
        <ProductInfos>
          <p>{dataProduct.name}</p>

          <div className="prince-and-quantity">
            <QuantityInput>
              <button
                onClick={() => setProductQuantity((quantity) => quantity - 1)}
              >
                -
              </button>
              <span>{productQuantity}</span>
              <button
                onClick={() => setProductQuantity((quantity) => quantity + 1)}
              >
                +
              </button>
            </QuantityInput>

            <Price>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 0,
              }).format(dataProduct.price)}
            </Price>
          </div>
        </ProductInfos>
      </ItemInfos>
    </Container>
  );
}
