import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDocument, getApplicationInfo } from "@/api";
import { completeStep, setStep, type TRootState } from "@/store";

interface IScheduleItem {
  number: number;
  date: string;
  totalPayment: number;
  interestPayment: number;
  debtPayment: number;
  remainingDebt: number;
};

export const usePaymantSchedule = () => {
  const { applicationId } = useSelector((state: TRootState) => state.offers);
  const [loading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState<IScheduleItem[] | null>(null);
  const dispatch = useDispatch();

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

    if (!applicationId) return;

    const res = await createDocument(applicationId);

    if (res) {
      dispatch(completeStep(3));
      dispatch(setStep(4));
    }

    setLoading(false);
  };

  return { schedule, loading, submitSchedule };
};
