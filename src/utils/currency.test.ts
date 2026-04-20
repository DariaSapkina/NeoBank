import { type ICurrencyResponse } from "@/api";
export type TCurrencyData = Record<string, ICurrencyResponse | null>;

export const currencyTestData: TCurrencyData = {
  CHF: {
    conversion_rate: 97.3374,
  },
  CNY: {
    conversion_rate: 11.1732,
  },
  EUR: {
    conversion_rate: 89.8946,
  },
  JPY: {
    conversion_rate: 0.4791,
  },
  TRY: {
    conversion_rate: 1.6942,
  },
  USD: {
    conversion_rate: 76.0451,
  },
};
