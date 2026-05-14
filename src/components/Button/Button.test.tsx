import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

const renderComponent = (isDisable = false, isReject = false) => {
  return render(
    <Button title="Send" size="medium" radius="medium" isDisable={isDisable} isReject={isReject}/>,
  )
};

describe("Button component", () => {
  test("render button with title", () => {
    renderComponent();
    expect(screen.getByText("Send")).toBeInTheDocument();
  });

  test("button is disabled when isDisable is true", () => {
    renderComponent(true);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("button is rejected when isReject is true", () => {
    renderComponent(false, true);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button_reject");
  });
});
