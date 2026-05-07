import type { FC } from "react";
import { Link } from "react-router-dom";
import { CURRENCIES_FROM } from "@/constants";
import type { TCurrency } from "@/types";
import "./ExchangeRate.scss";

interface IExchangeRateProps {
  data: TCurrency;
  loading: boolean;
  date: string;
};

const ExchangeRate: FC<IExchangeRateProps> = ({ data, loading, date }) => {
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
        {CURRENCIES_FROM.map(({ name, id }) => {
          const rate = data[name]?.conversion_rate;
          return (
            <li key={id} className="exchangeRate__listItem">
              <span className="exchangeRate__currencyName">{name}:</span>
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
