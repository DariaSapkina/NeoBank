import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion } from "./Accordion";
import type { IFAQ } from "@/types";

const testData = [
  { id: "1", title: "Question 1", content: "Answer 1" },
  { id: "2", title: "Question 2", content: "Answer 2" },
];

const renderComponent = (
  openId: string | null,
  handleToggle: (openId: string) => void,
  accordionData: IFAQ[] = testData,
) => {
  return render(
    <Accordion
      accordionData={accordionData}
      openId={openId}
      handleToggle={handleToggle}
    />,
  );
};

describe("Accordion component", () => {
  test("handleToggle on click", async () => {
    const user = userEvent.setup();
    const handleToggle = vi.fn();
    renderComponent(null, handleToggle);
    await user.click(screen.getByText("Question 1"));
    expect(handleToggle).toHaveBeenCalledWith("1");
  });

  test("add open class when item is active", () => {
    renderComponent("1", vi.fn());
    const button = screen.getByText("Question 1");
    expect(button).toHaveClass("accordion__title_open");
    const content = screen.getByText("Answer 1");
    expect(content.parentElement).toHaveClass("accordion__collapse_open");
  });

  test("inactive item doesn't have open class", () => {
    renderComponent("1", vi.fn());
    const button = screen.getByText("Question 2");
    expect(button).not.toHaveClass("accordion__title_open");
  });
});
