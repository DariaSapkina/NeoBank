import { Button } from "@/components";
import cardImage1 from "@/assets/cardImage1.png";
import cardImage2 from "@/assets/cardImage2.png";
import cardImage3 from "@/assets/cardImage3.png";
import cardImage4 from "@/assets/cardImage4.png";
import "./HeroSection.scss";

const IMG_LIST = [
  { id: 1, src: cardImage1, alt: "Card design 1" },
  { id: 2, src: cardImage2, alt: "Card design 2" },
  { id: 3, src: cardImage3, alt: "Card design 3" },
  { id: 4, src: cardImage4, alt: "Card design 4" },
];

const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="heroSection__content">
        <h1 className="heroSection__title">
          Choose the design you like and apply for card right now
        </h1>
        <div className="heroSection__buttonWrapper">
          <Button
            title="Choose the card"
            radius="medium"
            size="large"
            ariaLabel="Choose your card and apply"
          />
        </div>
      </div>
      <div className="heroSection__cardsWrapper">
        {IMG_LIST.map(({ id, src, alt }) => (
          <img src={src} alt={alt} key={id} />
        ))}
      </div>
    </section>
  );
};

export { HeroSection };
