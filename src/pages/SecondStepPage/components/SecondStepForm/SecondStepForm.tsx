import { Button, FormFields, type IFormInputSecondStep } from "@/components";
import {
  BASIC_INPUTS_SECOND_STEP_INFO,
  EMPLOYMENT_INPUTS_SECOND_STEP_INFO,
} from "@/constants";
import { useFormikContext } from "formik";
import "./SecondStepForm.scss";

const SecondStepForm = () => {
  const { handleSubmit } = useFormikContext<IFormInputSecondStep>();

  return (
    <section className="secondStepForm">
      <form className="secondStepForm__form" noValidate onSubmit={handleSubmit}>
        <div className="secondStepForm__header">
          <h1 className="secondStepForm__title">
            Continuation of the application
          </h1>
          <span className="secondStepForm__step">Step 2 of 5</span>
        </div>
        <div className="secondStepForm__fieldsWrapper">
          <FormFields<IFormInputSecondStep>
            inputs={BASIC_INPUTS_SECOND_STEP_INFO}
            size="large"
          />
          <FormFields<IFormInputSecondStep>
            inputs={EMPLOYMENT_INPUTS_SECOND_STEP_INFO}
            legend="Employment"
            size="large"
          />
        </div>
        <div className="secondStepForm__buttonWrapper">
          <Button type="submit" title="Continue" size="large" radius="small" />
        </div>
      </form>
    </section>
  );
};

export { SecondStepForm };
