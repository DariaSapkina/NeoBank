import "./LoanPage.scss";
import {
  CardOverviewSection,
  StepsSection,
  TabsSection,
  FormSection,
} from "./components";

const LoanPage = () => {
  return (
    <div className="loanPage">
      <CardOverviewSection />
      <TabsSection />
      <StepsSection />
      <FormSection />
    </div>
  );
};

export { LoanPage };
