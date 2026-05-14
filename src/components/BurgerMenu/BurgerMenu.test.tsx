import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu";
import type { TNavItem } from "@/types";

const testData: TNavItem[] = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About", href: "/about" },
];

const renderComponent = () => {
  return render(
    <MemoryRouter>
      <BurgerMenu items={testData} />
    </MemoryRouter>,
  );
};

describe("BurgerMenu component", () => {
  test("render button", () => {
    renderComponent();
    const button = screen.getByLabelText("Toggle menu");
    expect(button).toBeInTheDocument();
  });

  test("burger menu open and close", async () => {
    const user = userEvent.setup();
    renderComponent();
    const button = screen.getByLabelText("Toggle menu");
    await user.click(button);
    expect(button).toHaveTextContent("✕");
    await user.click(button);
    expect(button).toHaveTextContent("☰");
  });

  test("update aria-expanded on toggle", async () => {
    const user = userEvent.setup();
    renderComponent();
    const button = screen.getByLabelText("Toggle menu");
    expect(button).toHaveAttribute("aria-expanded", "false");
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
  });
});
