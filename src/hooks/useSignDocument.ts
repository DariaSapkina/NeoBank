import { signDocument } from "@/api";
import type { TRootState } from "@/store";
import { useState } from "react";
import { useSelector } from "react-redux";

export const useSignDocument = () => {
  const [isSigned, setIsSigned] = useState(false);
  const [loading, setLoading] = useState(false);
  const { applicationId } = useSelector((state: TRootState) => state.offers);

  const handleSign = async () => {
    setLoading(true);
    const res = await signDocument(applicationId);

    if (res) {
      setIsSigned(true);
    }
    setLoading(false);
  };

  return { handleSign, isSigned, loading };
};
