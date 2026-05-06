import { FormikProvider } from "formik";
import { useSelector } from "react-redux";
import type { TRootState } from "@/store";
import { useFormMainInfo, useSelectOffer } from "@/hooks";
import { Spinner } from "@/components";
import {
  FormSection,
  PreliminaryDecisionNotice,
  OffersSection,
} from "../index";

const LoanApplicationFlow = () => {
  const formik = useFormMainInfo();
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
