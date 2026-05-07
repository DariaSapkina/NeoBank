import type { ReactNode } from "react";

export interface ITab {
  id: number;
  label: string;
  value: string;
  content: ReactNode;
};
