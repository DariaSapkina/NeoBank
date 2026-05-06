import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { FormikProvider } from "formik";
import { Spinner } from "@/components";
import { useApplicationIdGuard, useFormPersonalAndEmployment } from "@/hooks";
import type { TRootState } from "@/store";
import { ApplicationProcessing, SecondStepForm } from "./components";
import "./PersonalAndEmploymentPage.scss";

const PersonalAndEmploymentPage = () => {
  const { completed } = useSelector((state: TRootState) => state.application);
  const formik = useFormPersonalAndEmployment();
  const { isValidApplicationId } = useApplicationIdGuard();

  if (!isValidApplicationId) {
    return <Navigate to="/loan" replace />;
  }

  if (completed[2]) {
    return <ApplicationProcessing />;
  }

  if (formik.isLoading) {
    return (
      <div className="spinnerWrapper">
        <Spinner />
      </div>
    );
  }

  return (
    <section className="personalAndEmploymentPage">
      <FormikProvider value={formik}>
        <SecondStepForm />
      </FormikProvider>
    </section>
  );
};

export { PersonalAndEmploymentPage };
