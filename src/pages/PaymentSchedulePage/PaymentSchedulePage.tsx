import { Spinner, type IColumnHeader } from "@/components";
import { usePaymantSchedule } from "@/hooks";
import { FormedDocumentNotice, ThirdStepTable } from "./components";
import "./PaymentSchedulePage.scss";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { TRootState } from "@/store";

const TABLR_HEADER: IColumnHeader[] = [
  { id: 1, title: "NUMBER", key: "number" },
  { id: 2, title: "DATE", key: "date" },
  { id: 3, title: "TOTAL PAYMENT", key: "totalPayment" },
  { id: 4, title: "INTEREST PAYMENT", key: "interestPayment" },
  { id: 5, title: "DEBT PAYMENT", key: "debtPayment" },
  { id: 6, title: "REMAINING DEBT", key: "remainingDebt" },
];

const PaymentSchedulePage = () => {
  const { loading, schedule, submitSchedule } = usePaymantSchedule();

  const { applicationId: userAppId } = useSelector(
    (state: TRootState) => state.offers,
  );
  const { completed } = useSelector((state: TRootState) => state.application);

  const { applicationId } = useParams();

  if (!userAppId || String(userAppId) !== applicationId) {
    return <Navigate to="/loan" replace />;
  }

  if (loading) {
    return (
      <div className="spinnerWrapper">
        <Spinner />
      </div>
    );
  }

  if (completed[3]) {
    return <FormedDocumentNotice />;
  }

  return (
    <div className="paymentSchedulePage">
      {schedule && (
        <ThirdStepTable
          columns={TABLR_HEADER}
          rows={schedule}
          onClick={submitSchedule}
        />
      )}
    </div>
  );
};

export { PaymentSchedulePage };
