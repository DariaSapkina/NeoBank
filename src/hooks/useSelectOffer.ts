import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectOffer } from "@/api";
import type { IRequestFirstStep } from "@/types";
import { completeStep, setSelectedOffer, setStep } from "@/store";

export const useSelectOffer = () => {
  const [isSelectLoading, setIsSelectLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSelectOffer = async (offer: IRequestFirstStep) => {
    setIsSelectLoading(true);
    const data = await selectOffer(offer);

    if (data) {
      dispatch(setSelectedOffer(offer));
      dispatch(completeStep(1));
      dispatch(setStep(2));
    }

    setIsSelectLoading(false);
  };

  return { handleSelectOffer, isSelectLoading };
};
