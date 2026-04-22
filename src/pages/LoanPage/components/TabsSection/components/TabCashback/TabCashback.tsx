import "./TabCashback.scss";
import { CashbackCard } from "@/components";

const CASHBACK_CARDS = [
  {
    id: 1,
    category: "For food delivery, cafes and restaurants",
    value: "5%",
  },
  {
    id: 2,
    category: "In supermarkets with our subscription",
    value: "5%",
  },
  {
    id: 3,
    category: "In clothing stores and children's goods",
    value: "2%",
  },
  {
    id: 4,
    category: "Other purchases and payment of services and fines",
    value: "1%",
  },
  {
    id: 5,
    category: "Shopping in online stores",
    value: "up to 3%",
  },
  {
    id: 6,
    category: "Purchases from our partners",
    value: "30%",
  },
];

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
