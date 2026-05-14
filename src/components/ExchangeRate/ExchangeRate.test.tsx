import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ExchangeRate } from "./ExchangeRate";
import type { TCurrency } from "@/types";

const testData: TCurrency = {
  USD: { conversion_rate: 90.123 },
  EUR: { conversion_rate: 100.456 },
};

const renderComponent = (loading: boolean, data = testData) => {
  return render(
    <MemoryRouter>
      <ExchangeRate data={data} loading={loading} date="12.05.2026" />
    </MemoryRouter>,
  );
};

describe("ExchangeRate component", () => {
  test("show loading state", () => {
    renderComponent(true, {});
    const loadingElements = screen.getAllByText("Loading...");
    expect(loadingElements.length).toBeGreaterThan(0);
  });

  test("render currency rates", () => {
    renderComponent(false);
    expect(screen.getByText("USD:")).toBeInTheDocument();
    expect(screen.getByText("90.12")).toBeInTheDocument();
    expect(screen.getByText("EUR:")).toBeInTheDocument();
    expect(screen.getByText("100.46")).toBeInTheDocument();
  });

  test("show Not available when rate is missing", () => {
    renderComponent(false, {});
    const items = screen.getAllByText("Not available");
    expect(items.length).toBeGreaterThan(0);
  });
});
