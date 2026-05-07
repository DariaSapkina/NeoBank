import { type FC } from "react";
import { useSortTable } from "@/hooks";
import type { IRowTable, ITableProps } from "@/types";
import "./Table.scss";

const Table: FC<ITableProps> = ({ columns, rows }) => {
  const { sortKey, direction, handleSort, sortedRows } = useSortTable(rows);

  const headCeilClass = (key: keyof IRowTable) =>
    key === sortKey
      ? direction === "asc"
        ? "table__cell_head_asc"
        : direction === "desc"
          ? "table__cell_head_desc"
          : "table__cell_head_ase"
      : "";

  return (
    <div className="table">
      <table className="table__main">
        <thead className="table__head">
          <tr className="table__row">
            {columns.map(({ id, title, key }) => (
              <th
                key={id}
                className={`table__cell table__cell_head ${headCeilClass(key)}`}
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
    </div>
  );
};

export { Table };
