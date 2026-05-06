import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signDocument } from "@/api";
import { completeStep, setStep, type TRootState } from "@/store";

export const useSignDocument = () => {
  const [loading, setLoading] = useState(false);
  const { applicationId } = useSelector((state: TRootState) => state.offers);
  const dispatch = useDispatch();

  const handleSign = async () => {
    setLoading(true);

    if (!applicationId) return;

    const res = await signDocument(applicationId);

    if (res) {
      dispatch(completeStep(4));
      dispatch(setStep(5));
    }

    setLoading(false);
  };

  return { handleSign, loading };
};
