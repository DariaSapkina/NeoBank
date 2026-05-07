export interface ICurrencyResponse {
  conversion_rate: number;
};

export type TCurrency = Record<string, ICurrencyResponse | null>;
