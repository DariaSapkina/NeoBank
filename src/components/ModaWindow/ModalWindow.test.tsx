import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ModalWindow } from "./ModalWindow";

const renderComponent = (setActive = vi.fn(), onClose = vi.fn()) => {
  return render(
    <ModalWindow
      active={true}
      setActive={setActive}
      onClose={onClose}
      title="Test title"
      paragraph="Test paragraph"
    >
      <div>Content</div>
    </ModalWindow>,
  );
};

describe("ModalWindow component", () => {
  test("render title, paragraph and children", () => {
    renderComponent();
    expect(screen.getByText("Test title")).toBeInTheDocument();
    expect(screen.getByText("Test paragraph")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  test("close modal when overlay is clicked", async () => {
    const user = userEvent.setup();
    const setActive = vi.fn();
    const { container } = renderComponent(setActive);
    const overlay = container.firstChild as HTMLElement;
    await user.click(overlay);
    expect(setActive).toHaveBeenCalledWith(false);
  });

  test("don't close when content is clicked", async () => {
    const user = userEvent.setup();
    const setActive = vi.fn();
    renderComponent(setActive);
    await user.click(screen.getByText("Content"));
    expect(setActive).not.toHaveBeenCalled();
  });

  test("call onClose when close button clicked", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    renderComponent(vi.fn(), onClose);
    const closeBtn = screen.getByRole("button");
    await user.click(closeBtn);
    expect(onClose).toHaveBeenCalled();
  });
});
