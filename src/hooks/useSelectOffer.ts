import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectOffer, type IRequestFirstStep } from "@/api";
import { setSelectedOffer, setStep } from "@/store";

export const useSelectOffer = () => {
  const [isSelectLoading, setIsSelectLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSelectOffer = async (offer: IRequestFirstStep) => {
    setIsSelectLoading(true);
    const data = await selectOffer(offer);
    console.log(data);
    if (data) {
      dispatch(setSelectedOffer(offer));
      dispatch(setStep(3));
    }
    setIsSelectLoading(false);
  };

  return { handleSelectOffer, isSelectLoading };
};
