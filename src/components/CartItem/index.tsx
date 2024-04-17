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
  handleDelete(id: number): void;
}

export function CartItem({
  dataProduct,
  handleUptadeQuantity,
  handleDelete,
}: CartItemProps) {
  const [productQuantity, setProductQuantity] = useState(dataProduct.quantity);

  useEffect(() => {
    handleUptadeQuantity(dataProduct.id, productQuantity);
    productQuantity <= 0 && handleDelete(dataProduct.id);
  }, [productQuantity]);

  return (
    <Container>
      <DeleteButton onClick={() => handleDelete(dataProduct.id)}>
        <Image src={CloseCartIcon} alt={""} className="delete-button-img" />
      </DeleteButton>
      <ItemInfos>
        <img src={dataProduct.photo} className="product-photo" />
        <ProductInfos>
          <p>{dataProduct.name}</p>

          <div className="prince-and-quantity">

            {/* add or remove quantity of item */}
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
