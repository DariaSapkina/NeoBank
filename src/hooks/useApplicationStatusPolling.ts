import { useEffect, type FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getApplicationInfo } from "@/api";
import { resetApplication, resetOffers } from "@/store";

interface IStatusPollingProps {
  applicationId: number | null;
  enabled: boolean;
};

export const useApplicationStatusPolling: FC<IStatusPollingProps> = ({
  applicationId,
  enabled,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!enabled || !applicationId) return;

    const interval = setInterval(async () => {
      const application = await getApplicationInfo(applicationId);

      if (!application) return;

      if (application.status === "CC_DENIED") {
        clearInterval(interval);
        dispatch(resetApplication());
        dispatch(resetOffers());
        navigate("/");
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [enabled, applicationId, navigate, dispatch]);
};
