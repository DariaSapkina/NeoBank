import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Spinner } from "@/components";
import type { IColumnHeader } from "@/types";
import { useApplicationIdGuard, usePaymentSchedule } from "@/hooks";
import { FormedDocumentNotice, PaymentTable } from "./components";
import type { TRootState } from "@/store";
import "./PaymentSchedulePage.scss";

const TABLE_HEADER: IColumnHeader[] = [
  { id: 1, title: "NUMBER", key: "number" },
  { id: 2, title: "DATE", key: "date" },
  { id: 3, title: "TOTAL PAYMENT", key: "totalPayment" },
  { id: 4, title: "INTEREST PAYMENT", key: "interestPayment" },
  { id: 5, title: "DEBT PAYMENT", key: "debtPayment" },
  { id: 6, title: "REMAINING DEBT", key: "remainingDebt" },
];

const PaymentSchedulePage = () => {
  const { loading, schedule, submitSchedule } = usePaymentSchedule();
  const { completed } = useSelector((state: TRootState) => state.application);
  const { isValidApplicationId } = useApplicationIdGuard();

  if (!isValidApplicationId) {
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
    <section className="paymentSchedulePage">
      {schedule && (
        <PaymentTable
          columns={TABLE_HEADER}
          rows={schedule}
          onClick={submitSchedule}
        />
      )}
    </section>
  );
};

export { PaymentSchedulePage };
