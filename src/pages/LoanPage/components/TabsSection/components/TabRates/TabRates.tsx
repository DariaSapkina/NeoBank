import { RATES } from "./tabRates.constants";
import "./TabRates.scss";

const TabRates = () => {
  return (
    <dl className="tabRates">
      {RATES.map(({ id, label, values }) => (
        <div key={id} className="tabRates__row">
          <dt className="tabRates__label">{label}</dt>
          <dd className="tabRates__values">
            {values.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
};

export { TabRates };
