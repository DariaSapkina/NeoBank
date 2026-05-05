import type { FC } from "react";
import { useSelector } from "react-redux";
import cardImageLoanPage from "@/assets/cardImageLoanPage.png";
import { Tooltip, Button } from "@/components";
import type { TRootState } from "@/store";
import "./CardOverviewSection.scss";
import { getButtonConfig } from "@/utils";

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

interface ICardOverviewProps {
  onScrollToForm: () => void;
  onNavigate: (applicationId: number | null) => void;
}

const CardOverviewSection: FC<ICardOverviewProps> = ({
  onScrollToForm,
  onNavigate,
}) => {
  const { completed } = useSelector((state: TRootState) => state.application);
  const { applicationId } = useSelector((s: TRootState) => s.offers);

  const button = getButtonConfig(
    completed[1],
    applicationId,
    onScrollToForm,
    onNavigate,
  );

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
          <Button
            title={button.title}
            radius="small"
            size="large"
            onClick={() => button.onClick(applicationId)}
          />
        </div>
      </div>
      <div className="cardOverviewSection__img">
        <img src={cardImageLoanPage} alt="Platinum credit card" />
      </div>
    </section>
  );
};

export { CardOverviewSection };
