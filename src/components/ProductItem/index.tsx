import Image from "next/image";
import ShoppingIcon from "../../assets/shoppingIcon.svg";
import { ButtonBuyItem, ContainerProduct, ProductInfos } from "./styles";
import { Product } from "@/types/product";

interface ProductItemProps {
  data?: Product;
}

export function ProductItem({ data }: ProductItemProps) {
  const handleAddToCart = () => {
    let cartItems = localStorage.getItem("cart-items");
    if (cartItems) {
      let cartItemsArray = JSON.parse(cartItems);

      let existingProductIndex = cartItemsArray.findIndex(
        (item: { id: number }) => item.id === data?.id
      );

      if (existingProductIndex != -1) {
        cartItemsArray[existingProductIndex].quantity += 1;
      } else {
        cartItemsArray.push({ ...data, id: data?.id, quantity: 1 });
      }

      localStorage.setItem("cart-items", JSON.stringify(cartItemsArray));
    } else {
      const newCart = [
        {
          ...data,
          id: data?.id,
          quantity: 1,
        },
      ];
      localStorage.setItem("cart-items", JSON.stringify(newCart));
    }
  };

  return (
    <ContainerProduct>
      {data ? (
        <>
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
          <ButtonBuyItem onClick={handleAddToCart}>
            <Image src={ShoppingIcon} alt="ShoppingIcon" />
            Comprar
          </ButtonBuyItem>
        </>
      ) : (
        <>
          <ProductInfos>
            <div className="img-skeleton skeleton" />
            <p className="skeleton-text skeleton"></p>
            <p className="skeleton-text skeleton"></p>
            <p className="skeleton-text skeleton"></p>
            <p className="skeleton-text skeleton"></p>
            <p className="skeleton-text skeleton"></p>
            <p className="skeleton-text skeleton"></p>
            <p className="skeleton-text skeleton"></p>
          </ProductInfos>
          <ButtonBuyItem disabled className="skeleton" />
        </>
      )}
    </ContainerProduct>
  );
}
