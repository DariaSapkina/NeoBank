import { createDocument, getApplicationInfo } from "@/api";
import type { TRootState } from "@/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface IScheduleItem {
  number: number;
  date: string;
  totalPayment: number;
  interestPayment: number;
  debtPayment: number;
  remainingDebt: number;
}

export const usePaymantSchedule = () => {
  const { applicationId } = useSelector((state: TRootState) => state.offers);
  const [loading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState<IScheduleItem[] | null>(null);
  const [submittingSchedule, setSubmittingSchedule] = useState(true);

  useEffect(() => {
    const getSchedule = async () => {
      if (!applicationId) return;

      const data = await getApplicationInfo(applicationId);

      if (data) {
        setSchedule(data.credit.paymentSchedule);
        setLoading(false);
      }
    };

    getSchedule();
  }, [applicationId]);

  const submitSchedule = async () => {
    setLoading(true);
    const res = await createDocument(applicationId);
    if (res) {
      setSubmittingSchedule(true);
    }
    setLoading(false);
  };

  return { schedule, loading, submittingSchedule, submitSchedule };
};
