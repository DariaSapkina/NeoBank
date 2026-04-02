import "./FeatureSection.scss";
import illustrationHomePage from "@/assets/IllustrationHomePage.svg";

const FeatureSection = () => {
  return (
    <section className="featureSection">
      <div className="featureSection__imgWrapper">
        <img src={illustrationHomePage} alt="" />
      </div>
      <div className="featureSection__content">
        <h2 className="featureSection__title">
          We Provide Many Features You Can Use
        </h2>
        <p className="featureSection__paragraph">
          You can explore the features that we provide with fun and have their
          own functions each feature
        </p>
        <ul className="featureSection__list">
          <li className="featureSection__listItem">
            Powerfull online protection.
          </li>
          <li className="featureSection__listItem">
            Cashback without borders.
          </li>
          <li className="featureSection__listItem">Personal design</li>
          <li className="featureSection__listItem">
            Work anywhere in the world
          </li>
        </ul>
      </div>
    </section>
  );
};

export { FeatureSection };
