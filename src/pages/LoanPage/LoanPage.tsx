import "./LoanPage.scss";
import { CardOverviewSection, StepsSection } from "./components";

const LoanPage = () => {
  return (
    <div className="loanPage">
      <CardOverviewSection />
      <StepsSection />
    </div>
  );
};

export { LoanPage };
