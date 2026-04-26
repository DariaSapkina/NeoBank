import { useRef } from "react";
import {
  CardOverviewSection,
  StepsSection,
  TabsSection,
  FormSection,
} from "./components";
import "./LoanPage.scss";

const LoanPage = () => {
  const formRef = useRef<HTMLDivElement | null>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="loanPage">
      <CardOverviewSection onApplyClick={scrollToForm}/>
      <TabsSection />
      <StepsSection />
      <div ref={formRef}>
        <FormSection />
      </div>
    </div>
  );
};

export { LoanPage };
