import illustrationHomePage from "@/assets/IllustrationHomePage.svg";
import "./FeatureSection.scss";

const FeatureSection = () => {
  const featureList = [
    "Powerfull online protection.",
    "Cashback without borders.",
    "Personal design.",
    "Work anywhere in the world.",
  ];

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
          {featureList.map((item) => (
            <li className="featureSection__listItem" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { FeatureSection };
