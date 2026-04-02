import axios from "axios";

export interface ICurrencyResponse {
  conversion_rate: number;
}

export async function getCurrency(
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
}

export async function getAllCurrency(
  url: string,
  apiKey: string,
  toCurrency: string,
  fromCurrencies: string[],
) {
  if (!toCurrency || fromCurrencies.length === 0) return;

  const promises = fromCurrencies.map((currency) =>
    getCurrency(url, apiKey, toCurrency, currency),
  );

  const res = await Promise.allSettled(promises);
  const data: Record<string, ICurrencyResponse | null> = {};

  res.forEach((result, index) => {
    const currency = fromCurrencies[index];
    if (result.status === "fulfilled") {
      data[currency] = result.value;
    } else {
      data[currency] = null;
    }
  });

  return data;
}
