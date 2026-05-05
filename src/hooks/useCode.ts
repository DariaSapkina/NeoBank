import { sendCode } from "@/api";
import { completeStep, type TRootState } from "@/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useCode = () => {
  const { applicationId } = useSelector((state: TRootState) => state.offers);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleCheckCode = async (code: string) => {
    setLoading(true);

    if (!applicationId) return;

    const res = await sendCode(code, applicationId);

    if (!res) {
      setError("Invalid confirmation code");
      setLoading(false);
      return;
    }

    dispatch(completeStep(5));
    setLoading(false);
  };

  return { error, loading, handleCheckCode };
};
