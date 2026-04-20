import "./CardOverviewSection.scss";
import { Button } from "@/components";
import cardImageLoanPage from "@/assets/cardImageLoanPage.png";

const FEATURE_LIST = [
  {
    id: 1,
    value: "Up to 160 days",
    label: "No percent",
  },
  {
    id: 2,
    value: "Up to 600 000 ₽",
    label: "Credit limit",
  },
  {
    id: 3,
    value: "0 ₽",
    label: "Card service is free",
  },
];

const CardOverviewSection = () => {
  return (
    <section className="cardOverviewSection">
      <div className="cardOverviewSection__content">
        <h1 className="cardOverviewSection__title">
          Platinum digital credit card
        </h1>
        <p className="cardOverviewSection__description">
          Our best credit card. Suitable for everyday spending and shopping.
          Cash withdrawals and transfers without commission and interest.
        </p>
        <ul className="cardOverviewSection__featuresList">
          {FEATURE_LIST.map(({ id, value, label }) => (
            <li className="cardOverviewSection__feature" key={id}>
              <span className="cardOverviewSection__featureValue">{value}</span>
              <span className="cardOverviewSection__featureLabel">{label}</span>
            </li>
          ))}
        </ul>
        <div className="cardOverviewSection__buttonWrapper">
          <Button title="Apply for card" radius="small" size="large" />
        </div>
      </div>
      <div className="cardOverviewSection__img">
        <img src={cardImageLoanPage} alt="Platinum credit card" />
      </div>
    </section>
  );
};

export { CardOverviewSection };
