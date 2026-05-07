import { type FC } from "react";
import { useFormikContext } from "formik";
import { formatNumber } from "@/utils/formatNumber";
import type { IFormInput } from "@/types";
import "./Amount.scss";

interface IAmountProps {
  maxValue: number;
  minValue: number;
  step: number;
};

const Amount: FC<IAmountProps> = ({ maxValue, minValue, step }) => {
  const { values, setFieldValue, errors } = useFormikContext<IFormInput>();
  const percentage = ((values.amount - minValue) / (maxValue - minValue)) * 100;

  return (
    <div className={`amount ${errors.amount && "amount_error"}`}>
      <fieldset className="amount__fieldset">
        <legend className="amount__title">Select amount</legend>
        <p className="amount__value">{formatNumber(values.amount)}</p>
        <input
          style={
            {
              "--progress": `${percentage}%`,
            } as React.CSSProperties
          }
          id="loan-amount"
          type="range"
          name="amount"
          className="amount__field"
          min={minValue}
          max={maxValue}
          value={values.amount}
          step={step}
          onChange={(e) => setFieldValue("amount", Number(e.target.value))}
        />
        <div className="amount__range">
          <span className="amount__min">{formatNumber(minValue)}</span>
          <span className="amount__max">{formatNumber(maxValue)}</span>
        </div>
      </fieldset>
    </div>
  );
};

export { Amount };
