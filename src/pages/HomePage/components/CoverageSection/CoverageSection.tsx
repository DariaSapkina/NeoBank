import globalMap from "../../../../assets/globalMap.svg";
import "./CoverageSection.scss";

const CoverageSection = () => {
  return (
    <section className="coverageSection">
      <h2 className="coverageSection__title">
        You can use our services anywhere in the world
      </h2>
      <p className="coverageSection__paragraph">
        Withdraw and transfer money online through our application
      </p>
      <figure className="coverageSection__imgWapper">
        <img
          src={globalMap}
          alt="World map showing countries where the bank operates"
        />
      </figure>
    </section>
  );
};

export { CoverageSection };
