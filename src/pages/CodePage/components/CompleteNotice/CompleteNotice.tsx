import { Button } from "@/components";
import "./CompleteNotice.scss";
import SurpriseImage from "@/assets/SurpriseImage.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetApplication, resetOffers } from "@/store";

const CompleteNotice = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToHome = () => {
    dispatch(resetApplication());
    dispatch(resetOffers());
    navigate("/");
  };

  return (
    <section className="completeNotice">
      <img className="completeNotice__img" src={SurpriseImage} alt="" />
      <h1 className="completeNotice__title">
        Congratulations! You have completed your new credit card.
      </h1>
      <p className="completeNotice__paragraph">
        Your credit card will arrive soon. Thank you for choosing us!
      </p>
      <div className="completeNotice__buttonWrapper">
        <Button
          title="View other offers of our bank"
          size="large"
          radius="medium"
          onClick={goToHome}
        />
      </div>
    </section>
  );
};

export { CompleteNotice };
