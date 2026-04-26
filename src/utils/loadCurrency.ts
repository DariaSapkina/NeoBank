import { CURRENCIES_FROM, CURRENCY_TO, URL_CURRENCY, API_KEY_CURRENCY } from "@/constants";
import { getAllCurrency, type ICurrencyResponse } from "@/api";

export type TCurrencyData = Record<string, ICurrencyResponse | null>;

export const loadCurrency = async (
  dataSet: (data: TCurrencyData) => void,
  loadingSet: (loading: boolean) => void,
) => {
  const res = await getAllCurrency(URL_CURRENCY, API_KEY_CURRENCY, CURRENCY_TO, CURRENCIES_FROM);
  
  if (res) {
    dataSet(res);
    loadingSet(false);
  }
};
