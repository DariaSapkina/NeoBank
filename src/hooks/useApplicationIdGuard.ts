import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import type { TRootState } from "@/store";

export const useApplicationIdGuard = () => {
  const { applicationId: userAppId } = useSelector(
    (state: TRootState) => state.offers,
  );

  const { applicationId } = useParams();

  const isValidApplicationId = userAppId && String(userAppId) === applicationId;

  return {
    isValidApplicationId,
  };
};
