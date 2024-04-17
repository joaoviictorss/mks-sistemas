import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {} from "@/components/Footer";
import { StyledFooter } from "@/components/Footer/styles";

describe("Footer", () => {
  it("Should render correctly", () => {
    render(<StyledFooter />);
  });
  expect(
    screen.getByText("MKS Sistemas © Todos os direitos reservados")
  ).toBeInTheDocument();
});
