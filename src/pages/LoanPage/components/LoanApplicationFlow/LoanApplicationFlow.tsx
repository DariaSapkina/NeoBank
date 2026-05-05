import { FormikProvider } from "formik";
import { useSelector } from "react-redux";
import type { TRootState } from "@/store";
import { useFormFirstStep, useRestoreStep, useSelectOffer } from "@/hooks";
import { Spinner } from "@/components";
import {
  FormSection,
  PreliminaryDecisionNotice,
  OffersSection,
} from "../index";
import "./LoanApplicationFlow.scss";

const LoanApplicationFlow = () => {
  useRestoreStep();
  const formik = useFormFirstStep();
  const { offers } = useSelector((state: TRootState) => state.offers);
  const { completed } = useSelector((state: TRootState) => state.application);
  const { handleSelectOffer, isSelectLoading } = useSelectOffer();

  if (formik.isLoading || isSelectLoading) {
    return (
      <div className="spinnerWrapper">
        <Spinner />
      </div>
    );
  }

  if (completed && completed[1]) {
    return <PreliminaryDecisionNotice />;
  }

  if (offers.length) {
    return <OffersSection offers={offers} handleSelect={handleSelectOffer} />;
  }

  return (
    <FormikProvider value={formik}>
      <FormSection />
    </FormikProvider>
  );
};

export { LoanApplicationFlow };
