import { useEffect, useState } from "react";
import { REFRESH_INTERVAL_MS } from "@/constants";
import { loadCurrency } from "@/utils";
import type { TCurrency } from "@/types";

export const useCurrency = () => {
  const [data, setData] = useState<TCurrency>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCurrency(setData, setLoading);

    const interval = setInterval(loadCurrency, REFRESH_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return { data, loading };
};
