import { fireEvent, render, screen } from "@testing-library/react";
import { Formik } from "formik";
import { Amount } from "./Amount";

const renderComponent = (initialAmount = 150000, error = false) => {
  return render(
    <Formik
      initialValues={{ amount: initialAmount }}
      onSubmit={() => {}}
      initialErrors={error ? { amount: "Error" } : {}}
    >
      <Amount minValue={150000} maxValue={600000} step={5000} />
    </Formik>,
  );
};

describe("Amount component", () => {
  test("render formatted value", () => {
    renderComponent(300000);
    expect(screen.getByText("150 000")).toBeInTheDocument();
    expect(screen.getByText("600 000")).toBeInTheDocument();
    expect(screen.getByText("300 000")).toBeInTheDocument();
  });

  test("show error", () => {
    const { container } = renderComponent(50000, true);
    expect(container.firstChild).toHaveClass("amount_error");
  });

  test("update amount on range change", async () => {
    renderComponent();
    const input = screen.getByRole("slider") as HTMLInputElement;
    fireEvent.change(input, {
      target: { value: 300000 },
    });
    expect(input).toHaveValue("300000");
  });
});
