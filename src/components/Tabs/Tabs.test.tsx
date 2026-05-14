import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs } from "./Tabs";
import type { ITab } from "@/types";

const tabs: ITab[] = [
  { id: 1, label: "Tab 1", value: "tab1", content: "Content 1" },
  { id: 2, label: "Tab 2", value: "tab2", content: "Content 2" },
];

describe("Tabs component", () => {
  test("show first tab as default", () => {
    render(<Tabs tabs={tabs} />);
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.queryByText("Content 2")).not.toBeInTheDocument();
  })

  test("switch tab on click", async () => {
    const user = userEvent.setup();
    render(<Tabs tabs={tabs} />);
    await user.click(screen.getByText("Tab 2"));
    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });

  test("apply active class to selected tab", async () => {
    const user = userEvent.setup();
    render(<Tabs tabs={tabs} />);
    const tab2 = screen.getByText("Tab 2");
    await user.click(tab2);
    expect(tab2.closest(".tab__listItem")).toHaveClass("tab__listItem_active");
  });
});
