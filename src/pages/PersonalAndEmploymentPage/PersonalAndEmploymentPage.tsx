import { Spinner } from "@/components";
import { useFormSecondStep } from "@/hooks";
import type { TRootState } from "@/store";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { ApplicationProcessing, SecondStepForm } from "./components";
import { FormikProvider } from "formik";
import "./PersonalAndEmploymentPage.scss";

const PersonalAndEmploymentPage = () => {
  const { applicationId: userAppId } = useSelector(
    (state: TRootState) => state.offers,
  );
  const { completed } = useSelector((state: TRootState) => state.application);
  const { applicationId } = useParams();
  const formik = useFormSecondStep();

  if (!userAppId || String(userAppId) !== applicationId) {
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
    <div className="personalAndEmploymentPage">
      <FormikProvider value={formik}>
        <SecondStepForm />
      </FormikProvider>
    </div>
  );
};

export { PersonalAndEmploymentPage };
