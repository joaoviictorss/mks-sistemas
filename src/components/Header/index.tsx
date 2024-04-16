import { Cart } from "./Cart";
import { Logo } from "./Logo";
import { Container, HeaderContent } from "./styles";

export function Header() {
  return (
    <>
      <HeaderContent>
        <Container>
          <Logo />
          <Cart />
        </Container>
      </HeaderContent>
    </>
  );
}
