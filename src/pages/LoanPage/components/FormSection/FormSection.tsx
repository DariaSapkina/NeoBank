import { useState, type ChangeEvent } from "react";
import { useFormikContext } from "formik";
import { Amount, FormFields, Button } from "@/components";
import type { IFormInput } from "@/types";
import { INPUTS_INFO } from "@/constants";
import { formatNumber } from "@/utils";
import "./FormSection.scss";

const FormSection = () => {
  const [isFocusedAmountInput, setIsFocusedAmountInput] = useState(false);
  const { values, setFieldValue, handleSubmit } =
    useFormikContext<IFormInput>();

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setFieldValue("amount", Number(value));
  };

  const displayAmountValue = (value: number, isFocused: boolean) => {
    if (isFocused) return value || "";
    return formatNumber(value) + " ₽";
  };

  return (
    <form className="formSection" noValidate onSubmit={handleSubmit}>
      <div className="formSection__upWrapper">
        <div className="formSection__leftWrapper">
          <div className="formSection__header">
            <h2 className="formSection__title">Customize your card</h2>
            <span className="formSection__step">Step 1 of 5</span>
          </div>
          <Amount minValue={150000} maxValue={600000} step={5000} />
        </div>
        <div className="formSection__rightWrapper">
          <p className="formSection__resultLabel">You have chosen the amount</p>
          <input
            className="formSection__amountInput"
            type="text"
            value={displayAmountValue(values.amount, isFocusedAmountInput)}
            onFocus={() => setIsFocusedAmountInput(true)}
            onBlur={() => setIsFocusedAmountInput(false)}
            onChange={handleAmountChange}
          />
        </div>
      </div>
      <FormFields<IFormInput>
        inputs={INPUTS_INFO}
        legend="Contact Information"
      />
      <div className="formSection__buttonWrapper">
        <Button type="submit" title="Continue" size="large" radius="small" />
      </div>
    </form>
  );
};

export { FormSection };
