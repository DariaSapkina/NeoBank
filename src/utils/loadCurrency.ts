import { CURRENCIES_FROM, CURRENCY_TO, URL_CURRENCY, API_KEY_CURRENCY } from "@/constants";
import { getAllCurrency} from "@/api";
import type { TCurrency } from "@/types";

export const loadCurrency = async (
  dataSet: (data: TCurrency) => void,
  loadingSet: (loading: boolean) => void,
) => {
  const res = await getAllCurrency(URL_CURRENCY, API_KEY_CURRENCY, CURRENCY_TO, CURRENCIES_FROM);
  
  if (res) {
    dataSet(res);
    loadingSet(false);
  }
};
