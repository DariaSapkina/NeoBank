import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PinInput } from "./PinInput";

const renderComponent = (length: number, onComplete = vi.fn()) => {
  return render(<PinInput length={length} onComplete={onComplete} />);
};

describe("PinInput component", () => {
  test("update value on input change", async () => {
    const user = userEvent.setup();
    renderComponent(4);
    const inputs = screen.getAllByRole("textbox");
    await user.type(inputs[0], "1");
    expect(inputs[0]).toHaveValue("1");
  });

  test("call onComplete when all inputs are filled", async () => {
    const user = userEvent.setup();
    const onComplete = vi.fn();
    renderComponent(1, onComplete);
    const input = screen.getByRole("textbox");
    await user.type(input, "1");
    expect(onComplete).toHaveBeenCalled();
  });

  test("add filled class when input has value", async () => {
    const user = userEvent.setup();
    const { container } = renderComponent(2);
    const inputs = screen.getAllByRole("textbox");
    await user.type(inputs[0], "5");
    const wrapper = container.querySelector(".pinInput__inputWrapper");
    expect(wrapper).toHaveClass("pinInput__inputWrapper_filled");
  });
});
