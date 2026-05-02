import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApplicationInfo } from "@/api";
import { setStep, type TRootState } from "@/store";
import { mapStatusToStep } from "@/utils";

export const useRestoreStep = () => {
  const dispatch = useDispatch();
  const { applicationId } = useSelector((state: TRootState) => state.offers);

  useEffect(() => {
    if (!applicationId) return;

    const getStatus = async () => {
      const res = await getApplicationInfo(applicationId);

      if (res) {
        const step = mapStatusToStep(res.status);
        dispatch(setStep(step));
      }
    };

    getStatus();
  }, [applicationId, dispatch]);
};
