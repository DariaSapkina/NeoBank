import { Link } from "react-router-dom";
import { CURRENCIES_FROM } from "./currencyConst";
import { getDate } from "@/utils/getDate";
import { useCurrency } from "@/hooks/useCurrency";
import "./ExchangeRate.scss";

const ExchangeRate = () => {
  const date = getDate();
  const { data, loading } = useCurrency();

  return (
    <article className="exchangeRate">
      <div className="exchangeRate__titleWrapper">
        <h2 className="exchangeRate__title">Exchange rate in internet bank</h2>
        <p className="exchangeRate__description">
          Update every 15 minutes, MSC{" "}
          <time dateTime={new Date().toISOString()}>{date}</time>
        </p>
      </div>
      <span className="exchangeRate__label">Currency</span>
      <ul className="exchangeRate__list">
        {CURRENCIES_FROM.map((currency) => {
          const rate = data[currency]?.conversion_rate;
          return (
            <li key={currency} className="exchangeRate__listItem">
              <span className="exchangeRate__currencyName">{currency}:</span>
              <span className="exchangeRate__rate">
                {loading
                  ? "Loading..."
                  : rate
                    ? rate.toFixed(2)
                    : "Not available"}
              </span>
            </li>
          );
        })}
      </ul>
      <Link
        aria-label="View all currency exchange rates"
        to="#"
        className="exchangeRate__link"
      >
        All Courses
      </Link>
    </article>
  );
};

export { ExchangeRate };
