import "./HeroSection.scss";
import { Button } from "../../../../components/Button/Button";
import cardImage1 from "../../../../assets/cardImage1.png";
import cardImage2 from "../../../../assets/cardImage2.png";
import cardImage3 from "../../../../assets/cardImage3.png";
import cardImage4 from "../../../../assets/cardImage4.png";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="heroSection__content">
        <h1 className="heroSection__title">
          Choose the design you like and apply for card right now
        </h1>
        <div className="heroSection__buttonWrapper">
          <Button title="Choose the card" variant="rounded" />
        </div>
      </div>
      <div className="heroSection__cardsWrapper">
        <img src={cardImage1} alt="Card design 1" />
        <img src={cardImage2} alt="Card design 2" />
        <img src={cardImage3} alt="Card design 3" />
        <img src={cardImage4} alt="Card design 4" />
      </div>
    </section>
  );
};

export { HeroSection };
