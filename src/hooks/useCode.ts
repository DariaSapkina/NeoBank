import { sendCode } from "@/api";
import type { TRootState } from "@/store";
import { useState } from "react";
import { useSelector } from "react-redux";

export const useCode = () => {
  const { applicationId } = useSelector((state: TRootState) => state.offers);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSuccesCode, setIsSuccesCode] = useState(false);

  const handleCheckCode = async (code: string) => {
    setLoading(true);
    const res = await sendCode(code, applicationId);
    if (!res) {
      setError("Invalid confirmation code");
      setLoading(false);
      return;
    }
    setIsSuccesCode(true);
    setLoading(false);
  };

  return { error, loading, isSuccesCode, handleCheckCode };
};
