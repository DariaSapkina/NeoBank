import type { FC } from "react";
import type { IRequestFirstStep } from "@/types";
import { OfferCard } from "@/components";
import "./OffersSection.scss";

interface IOffersSectionProps {
  offers: IRequestFirstStep[];
  handleSelect: (offer: IRequestFirstStep) => void;
};

const OffersSection: FC<IOffersSectionProps> = ({ offers, handleSelect }) => {
  return (
    <ul className="offersList">
      {offers.map((offer, index) => (
        <OfferCard
          key={index}
          applicationId={offer.applicationId}
          isInsuranceEnabled={offer.isInsuranceEnabled}
          isSalaryClient={offer.isSalaryClient}
          monthlyPayment={offer.monthlyPayment}
          rate={offer.rate}
          requestedAmount={offer.requestedAmount}
          term={offer.term}
          totalAmount={offer.totalAmount}
          handleSelect={handleSelect}
        />
      ))}
    </ul>
  );
};

export { OffersSection };
