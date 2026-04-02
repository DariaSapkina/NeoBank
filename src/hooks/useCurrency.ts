import { useEffect, useState } from "react";
import { getAllCurrency, type ICurrencyResponse } from "@/utils/getCurrency";
import {
  URL,
  API_KEY,
  CURRENCIES_FROM,
  CURRENCY_TO,
  refreshIntervalMs,
} from "../constants/currency";

type TCurrencyData = Record<string, ICurrencyResponse | null>;

export const useCurrency = () => {
  const [data, setData] = useState<TCurrencyData>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const res = await getAllCurrency(
        URL,
        API_KEY,
        CURRENCY_TO,
        CURRENCIES_FROM,
      );
      if (res) {
        setData(res);
        setLoading(false);
        console.log("Обновили валюту:", res);
      }
    };

    load();

    const interval = setInterval(load, refreshIntervalMs);

    return () => clearInterval(interval);
  }, []);

  return { data, loading };
};
