import "./TabRates.scss";

const RATES = [
  {
    id: 1,
    label: "Card currency",
    values: ["Rubles, dollars, euro"],
  },
  {
    id: 2,
    label: "Interest free period",
    values: ["0% up to 160 days"],
  },
  {
    id: 3,
    label: "Payment system",
    values: ["Mastercard, Visa"],
  },
  {
    id: 4,
    label: "Maximum credit limit on the card",
    values: ["600 000 ₽"],
  },
  {
    id: 5,
    label: "Replenishment and withdrawal",
    values: [
      "At any ATM. Top up your credit card for free with cash or transfer from other cards",
    ],
  },
  {
    id: 6,
    label: "Max cashback per month",
    values: ["15 000 ₽"],
  },
  {
    id: 7,
    label: "Transaction Alert",
    values: [
      "60 ₽ — SMS or push notifications",
      "0 ₽ — card statement, information about transactions in the online bank",
    ],
  },
];

const TabRates = () => {
  return (
    <dl className="tabRates">
      {RATES.map(({ id, label, values }) => (
        <div key={id} className="tabRates__row">
          <dt className="tabRates__label">{label}</dt>
          <dd className="tabRates__values">
            {values.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
};

export { TabRates };
