import illustrationHomePage from "@/assets/IllustrationHomePage.svg";
import "./FeatureSection.scss";

const FEATURE_LIST = [
  { id: 1, title: "Powerfull online protection." },
  { id: 2, title: "Cashback without borders." },
  { id: 3, title: "Personal design." },
  { id: 4, title: "Work anywhere in the world." },
];

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
          {FEATURE_LIST.map(({id, title}) => (
            <li className="featureSection__listItem" key={id}>
              {title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { FeatureSection };
