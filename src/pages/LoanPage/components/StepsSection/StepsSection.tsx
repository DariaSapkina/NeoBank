import "./StepsSection.scss";

const STEPS = [
  {
    id: 1,
    step: "Fill out an online application - you do not need to visit the bank",
  },
  {
    id: 2,
    step: "Find out the bank's decision immediately after filling out the application",
  },
  {
    id: 3,
    step: "The bank will deliver the card free of charge, wherever convenient, to your city",
  },
];

const StepsSection = () => {
  return (
    <section className="stepsSection">
      <h2 className="stepsSection__title">How to get a card</h2>
      <ul className="stepsSection__stepsList">
        {STEPS.map(({ id, step }) => (
          <li key={id} className="stepsSection__step">
            <div className="stepsSection__contentUp">
              <div className="stepsSection__curcle">
                <span className="stepsSection__stepNumber">{id}</span>
              </div>
              <div className="stepsSection__line"></div>
            </div>
            <p className="stepsSection__stepDescription">{step}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { StepsSection };
