import { useEffect, useState } from "react";
import { REFRESH_INTERVAL_MS } from "@/components";
import { loadCurrency, type TCurrencyData } from "@/utils";

export const useCurrency = () => {
  const [data, setData] = useState<TCurrencyData>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCurrency(setData, setLoading);

    const interval = setInterval(loadCurrency, REFRESH_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return { data, loading };
};
