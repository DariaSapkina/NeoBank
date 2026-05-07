import { useMemo, useState } from "react";
import type { IRowTable } from "@/types";

type TSortDirection = "asc" | "desc" | "base";

export const useSortTable = (rows: IRowTable[]) => {
  const [sortKey, setSortKey] = useState<keyof IRowTable | null>(null);
  const [direction, setDirection] = useState<TSortDirection>("base");

  const handleSort = (key: keyof IRowTable) => {
    if (sortKey === key) {
      setDirection((prev) =>
        prev === "asc" ? "desc" : prev === "desc" ? "base" : "asc",
      );
    } else {
      setSortKey(key);
      setDirection("asc");
    }
  };

  const sortedRows = useMemo(() => {
    if (!sortKey) return rows;
    if (direction === "base") return rows;

    return [...rows].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      if (sortKey === "date") {
        const aDate = new Date(aValue).getTime();
        const bDate = new Date(bValue).getTime();

        return direction === "asc" ? aDate - bDate : bDate - aDate;
      }

      if (aValue < bValue) return direction === "asc" ? -1 : 1;
      if (aValue > bValue) return direction === "asc" ? 1 : -1;

      return 0;
    });
  }, [rows, sortKey, direction]);

  return {
    sortedRows,
    handleSort,
    direction,
    sortKey,
  };
};
