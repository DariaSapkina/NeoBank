import { CURRENCIES_FROM, CURRENCY_TO } from "@/components";
import { URL, API_KEY, getAllCurrency, type ICurrencyResponse } from "@/api";

export type TCurrencyData = Record<string, ICurrencyResponse | null>;

export const loadCurrency = async (
  dataSet: (data: TCurrencyData) => void,
  loadingSet: (loading: boolean) => void,
) => {
  const res = await getAllCurrency(URL, API_KEY, CURRENCY_TO, CURRENCIES_FROM);
  if (res) {
    dataSet(res);
    loadingSet(false);
  }
};
