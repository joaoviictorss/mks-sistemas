import { ButtonBuyItem, Container, ProductInfos } from "./styles";

export function ProductItemSkeleton() {
  return (
    <Container>
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
    </Container>
  );
}
