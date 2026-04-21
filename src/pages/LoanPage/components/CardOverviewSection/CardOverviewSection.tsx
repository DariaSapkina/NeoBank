import "./CardOverviewSection.scss";
import { Button } from "@/components";
import cardImageLoanPage from "@/assets/cardImageLoanPage.png";
import { Tooltip } from "@/components";

const FEATURE_LIST = [
  {
    id: 1,
    value: "Up to 160 days",
    label: "No percent",
    tooltip: "When repaying the full debt up to 160 days.",
  },
  {
    id: 2,
    value: "Up to 600 000 ₽",
    label: "Credit limit",
    tooltip: "Over the limit willaccrue percent.",
  },
  {
    id: 3,
    value: "0 ₽",
    label: "Card service is free",
    tooltip: "Promotion valid until December 31, 2022.",
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
          {FEATURE_LIST.map(({ id, value, label, tooltip }) => (
            <li className="cardOverviewSection__feature" key={id}>
              <Tooltip tooltip={tooltip}>
                <p className="cardOverviewSection__featureValue">{value}</p>
                <p className="cardOverviewSection__featureLabel">{label}</p>
              </Tooltip>
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
