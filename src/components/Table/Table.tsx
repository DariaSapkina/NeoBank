import { useMemo, useState, type FC } from "react";
import "./Table.scss";

export interface IColumnHeader {
  id: number;
  title: string;
  key: keyof IRowTable;
}

export interface IRowTable {
  number: number;
  date: string;
  totalPayment: number;
  interestPayment: number;
  debtPayment: number;
  remainingDebt: number;
}

export interface ITableProps {
  columns: IColumnHeader[];
  rows: IRowTable[];
}

type SortDirection = "asc" | "desc";

const Table: FC<ITableProps> = ({ columns, rows }) => {
  const [sortKey, setSortKey] = useState<keyof IRowTable | null>(null);
  const [direction, setDirection] = useState<SortDirection>("asc");

  const handleSort = (key: keyof IRowTable) => {
    if (sortKey === key) {
      setDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setDirection("asc");
    }
  };

  const sortedRows = useMemo(() => {
    if (!sortKey) return rows;

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

  return (
    <table className="table">
      <thead className="table__head">
        <tr className="table__row">
          {columns.map(({ id, title, key }) => (
            <th
              key={id}
              className={`table__cell table__cell_head ${key === sortKey && "table__cell_headSorted"}`}
              onClick={() => handleSort(key)}
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table__body">
        {sortedRows.map((row) => (
          <tr key={row.number} className="table__row">
            <td className="table__cell">{row.number}</td>
            <td className="table__cell">{row.date}</td>
            <td className="table__cell">{row.totalPayment}</td>
            <td className="table__cell">{row.interestPayment}</td>
            <td className="table__cell">{row.debtPayment}</td>
            <td className="table__cell">{row.remainingDebt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export { Table };
