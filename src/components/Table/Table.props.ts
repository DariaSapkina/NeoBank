export interface IColumnHeader {
  id: number;
  title: string;
  key: keyof IRowTable;
};

export interface IRowTable {
  number: number;
  date: string;
  totalPayment: number;
  interestPayment: number;
  debtPayment: number;
  remainingDebt: number;
};

export interface ITableProps {
  columns: IColumnHeader[];
  rows: IRowTable[];
};

export type TSortDirection = "asc" | "desc" | "base";
