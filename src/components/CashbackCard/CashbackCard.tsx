import type { FC } from "react";
import "./CashbackCard.scss";

interface ICashbackCardProps {
  category: string;
  value: string;
};

const CashbackCard: FC<ICashbackCardProps> = ({ category, value }) => {
  return (
    <li className="cashbackCard">
      <p className="cashbackCard__category">{category}</p>
      <p className="cashbackCard__value">{value}</p>
    </li>
  );
};

export { CashbackCard };
