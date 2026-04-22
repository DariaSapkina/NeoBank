import "./LoanPage.scss";
import { CardOverviewSection, StepsSection, TabsSection } from "./components";

const LoanPage = () => {
  return (
    <div className="loanPage">
      <CardOverviewSection />
      <TabsSection />
      <StepsSection />
    </div>
  );
};

export { LoanPage };
