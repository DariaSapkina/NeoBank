import { FormikProvider } from "formik";
import { Amount, FormFields, Button, Spinner } from "@/components";
import { formatNumber } from "@/utils";
import { INPUTS_INFO } from "@/constants";
import { useFormFirstStep } from "@/hooks";
import "./FormSection.scss";

const FormSection = () => {
  const formik = useFormFirstStep();

  return (
    <FormikProvider value={formik}>
      {formik.isLoading ? (
        <div className="formSection__spinner">
          <Spinner />
        </div>
      ) : (
        <form className="formSection" noValidate onSubmit={formik.handleSubmit}>
          <div className="formSection__upWrapper">
            <div className="formSection__leftWrapper">
              <div className="formSection__header">
                <h2 className="formSection__title">Customize your card</h2>
                <span className="formSection__step">Step 1 of 5</span>
              </div>
              <Amount minValue={150000} maxValue={600000} step={5000} />
            </div>
            <div className="formSection__rightWrapper">
              <p className="formSection__resultLabel">
                You have chosen the amount
              </p>
              <p className="formSection__resultValue">
                {formatNumber(formik.values.amount)} ₽
              </p>
            </div>
          </div>
          <FormFields
            values={formik.values}
            inputs={INPUTS_INFO}
            legend="Contact Information"
          />
          <div className="formSection__buttonWrapper">
            <Button
              type="submit"
              title="Continue"
              size="large"
              radius="small"
            />
          </div>
        </form>
      )}
    </FormikProvider>
  );
};

export { FormSection };
