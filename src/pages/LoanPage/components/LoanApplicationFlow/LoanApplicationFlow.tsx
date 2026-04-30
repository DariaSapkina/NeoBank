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

const LoanApplicationFlow = () => {
  useRestoreStep();
  const formik = useFormFirstStep();
  const { offers } = useSelector((state: TRootState) => state.offers);
  const { currentStep } = useSelector((state: TRootState) => state.application);
  const { handleSelectOffer, isSelectLoading } = useSelectOffer();

  if (formik.isLoading || isSelectLoading) {
    return (
      <div className="formSection__spinner">
        <Spinner />
      </div>
    );
  }

  if (currentStep === 1) {
    return (
      <FormikProvider value={formik}>
        <FormSection />
      </FormikProvider>
    );
  }

  if (currentStep === 2) {
    return <OffersSection offers={offers} handleSelect={handleSelectOffer} />;
  }

  if (currentStep === 3) {
    return <PreliminaryDecisionNotice />;
  }
};

export { LoanApplicationFlow };
