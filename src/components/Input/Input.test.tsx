import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik } from "formik";
import { Input } from "./Input";

type FormValues = {
  email: string;
};

const renderComponent = (
  initialValues: FormValues,
  errors: Partial<FormValues> = {},
) => {
  return render(
    <Formik
      initialValues={initialValues}
      onSubmit={() => {}}
      initialErrors={errors}
      initialTouched={{ email: true }}
    >
      <Input<FormValues>
        id="email"
        name="email"
        type="text"
        label="Email"
        placeholder="Enter email"
        required
      />
    </Formik>,
  );
};

describe("Input component", () => {
  test("render label and input", () => {
    renderComponent({ email: "" });
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
  });

  test("change input value", async () => {
    const user = userEvent.setup();
    renderComponent({ email: "" });
    const input = screen.getByPlaceholderText("Enter email");
    await user.type(input, "test@mail.com");
    expect(input).toHaveValue("test@mail.com");
  });

  test("show error", () => {
    const { container } = renderComponent(
      { email: "" },
      { email: "Invalid email" },
    );
    expect(screen.getByText("Invalid email")).toBeInTheDocument();
    expect(container.querySelector(".input__field")).toHaveClass(
      "input__field_error",
    );
  });
});
