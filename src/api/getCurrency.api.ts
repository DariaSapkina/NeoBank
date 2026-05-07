import axios from "axios";
import type { ICurrencyResponse, TCurrency } from "@/types";

async function getCurrency(
  url: string,
  apiKey: string,
  toCurrency: string,
  fromCurrency: string,
) {
  try {
    const res = await axios.get(
      `${url}${apiKey}/pair/${fromCurrency}/${toCurrency}`,
    );
    const response: ICurrencyResponse = {
      conversion_rate: res.data.conversion_rate,
    };
    return response;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
    return null;
  }
};

type TFromCurrency = {
  id: number;
  name: string;
};

export async function getAllCurrency(
  url: string,
  apiKey: string,
  toCurrency: string,
  fromCurrencies: TFromCurrency[],
) {
  if (!toCurrency || fromCurrencies.length === 0) return;

  const promises = fromCurrencies.map((currency) =>
    getCurrency(url, apiKey, toCurrency, currency.name),
  );

  const res = await Promise.allSettled(promises);
  const data: TCurrency = {};

  res.forEach((result, index) => {
    const currency = fromCurrencies[index];
    if (result.status === "fulfilled") {
      data[currency.name] = result.value;
    } else {
      data[currency.name] = null;
    }
  });

  return data;
};
