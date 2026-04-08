import { ExchangeRate } from "@/components";
import { useCurrency } from "@/hooks/useCurrency";
import { getDate } from "@/utils";
import "./ExchangeRateSection.scss";

const ExchangeRateSection = () => {
  const { data, loading } = useCurrency();
  const date = getDate();
  return (
    <section className="exchangeRateSection">
      <ExchangeRate data={data} loading={loading} date={date} />
    </section>
  );
};

export { ExchangeRateSection };
