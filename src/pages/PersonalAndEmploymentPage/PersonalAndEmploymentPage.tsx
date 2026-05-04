import { Spinner } from "@/components";
import { useFormSecondStep } from "@/hooks";
import type { TRootState } from "@/store";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { ApplicationProcessing, SecondStepForm } from "./components";
import { FormikProvider } from "formik";
import "./PersonalAndEmploymenPage.scss";

const PersonalAndEmploymentPage = () => {
  const { applicationId: userAppId } = useSelector(
    (state: TRootState) => state.offers,
  );
  const { applicationId } = useParams();
  const formik = useFormSecondStep();

  if (!userAppId || String(userAppId) !== applicationId) {
    return <Navigate to="/loan" replace />;
  }

  if (formik.isLoading) {
    return (
      <div className="spinnerWrapper">
        <Spinner />
      </div>
    );
  }

  if (formik.isSuccesRegistration) {
    return <ApplicationProcessing />;
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
