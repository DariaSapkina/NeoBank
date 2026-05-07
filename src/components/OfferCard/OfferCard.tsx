import type { FC } from "react";
import type { IRequestFirstStep } from "@/types";
import { formatNumber } from "@/utils";
import { Button } from "../Button";
import SurpriseImage from "@/assets/SurpriseImage.png";
import Check_fill from "@/assets/Check_fill.svg";
import Close_round_fill from "@/assets/Close_round_fill.svg";
import "./OfferCard.scss";

interface IOfferCardProps extends IRequestFirstStep {
  handleSelect: (offer: IRequestFirstStep) => void;
};

const OfferCard: FC<IOfferCardProps> = ({
  applicationId,
  isInsuranceEnabled,
  isSalaryClient,
  monthlyPayment,
  rate,
  requestedAmount,
  term,
  totalAmount,
  handleSelect,
}) => {
  const OFFER_CONTENT = [
    { label: "Requested amount", value: `${formatNumber(requestedAmount)} ₽` },
    { label: "Total amount", value: `${formatNumber(totalAmount)} ₽` },
    { label: "For", value: `${term} months` },
    { label: "Monthly payment", value: `${formatNumber(monthlyPayment)} ₽` },
    { label: "Your rate", value: `${rate}%` },
    { label: "Insurance included", value: isInsuranceEnabled },
    { label: "Salary client", value: isSalaryClient },
  ];

  const offer: IRequestFirstStep = {
    applicationId,
    requestedAmount,
    totalAmount,
    term,
    monthlyPayment,
    rate,
    isInsuranceEnabled,
    isSalaryClient,
  };

  return (
    <li className="offerCard">
      <img className="offerCard__img" src={SurpriseImage} alt="" />
      <ul className="offerCard__contentList">
        {OFFER_CONTENT.map((item, index) => (
          <li className="offerCard__contentItem" key={index}>
            <span className="offerCard__label">{item.label}</span>
            <span className="offerCard__value">
              {typeof item.value === "boolean" ? (
                item.value ? (
                  <img src={Check_fill}></img>
                ) : (
                  <img src={Close_round_fill}></img>
                )
              ) : (
                item.value
              )}
            </span>
          </li>
        ))}
      </ul>
      <div className="offerCard__buttonWrapper">
        <Button
          title="Select"
          radius="small"
          size="large"
          onClick={() => handleSelect(offer)}
        />
      </div>
    </li>
  );
};

export { OfferCard };
