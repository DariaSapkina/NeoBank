import { Button, Checkbox, Spinner } from "@/components";
import "./SignDocumentPage.scss";
import { useState } from "react";
import File_dock_duotone from "@/assets/File_dock_duotone.svg";
import { useSignDocument } from "@/hooks";
import { SignedDocumentNotice } from "./components";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { TRootState } from "@/store";
import Credit_card_offer from "@/assets/Credit_card_offer.pdf";

const SignDocumentPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { handleSign, loading } = useSignDocument();

  const { applicationId: userAppId } = useSelector(
    (state: TRootState) => state.offers,
  );
  const { completed } = useSelector((state: TRootState) => state.application);
  const { applicationId } = useParams();
  if (!userAppId || String(userAppId) !== applicationId) {
    return <Navigate to="/loan" replace />;
  }

  if (loading) {
    return (
      <div className="spinnerWrapper">
        <Spinner />
      </div>
    );
  }

  if (completed[4]) {
    return <SignedDocumentNotice />;
  }

  return (
    <div className="signDocumentPage">
      <section>
        <div className="signDocumentPage__header">
          <h1 className="signDocumentPage__title">Signing of documents</h1>
          <span className="signDocumentPage__step">Step 4 of 5</span>
        </div>
        <p className="signDocumentPage__description">
          Information on interest rates under bank deposit agreements with
          individuals. Center for Corporate Information Disclosure. Information
          of a professional participant in the securities market. Information
          about persons under whose control or significant influence the Partner
          Banks are. By leaving an application, you agree to the processing of
          personal data, obtaining information, obtaining access to a credit
          history, using an analogue of a handwritten signature, an offer, a
          policy regarding the processing of personal data, a form of consent to
          the processing of personal data.
        </p>
        <a
          href={Credit_card_offer}
          download="Information_on_your_card"
          className="signDocumentPage__file"
        >
          <img src={File_dock_duotone} alt="" />
          <span className="signDocumentPage__fileDesc">
            Information on your card
          </span>
        </a>
        <div className="signDocumentPage__buttonsWrapper">
          <Checkbox
            checked={isChecked}
            onChange={setIsChecked}
            label="I agree"
          />
          <div className="signDocumentPage__buttonWrapper">
            <Button
              title="Send"
              size="small"
              radius="small"
              isDisable={!isChecked}
              onClick={handleSign}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export { SignDocumentPage };
