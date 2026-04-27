import { CashbackCard } from "@/components";
import { CASHBACK_CARDS } from "./tabCashback.constants";
import "./TabCashback.scss";

const TabCashback = () => {
  return (
    <ul className="tabCashback">
      {CASHBACK_CARDS.map(({ id, category, value }) => (
        <CashbackCard category={category} value={value} key={id} />
      ))}
    </ul>
  );
};

export { TabCashback };
