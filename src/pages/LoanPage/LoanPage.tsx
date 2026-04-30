import { useRef } from "react";
import {
  CardOverviewSection,
  StepsSection,
  TabsSection,
  LoanApplicationFlow,
} from "./components";
import "./LoanPage.scss";
import { useNavigate } from "react-router-dom";

const LoanPage = () => {
  const formRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navigateToStep = (applicationId: number | null) => {
    if (!applicationId) return null;
    navigate(`/loan/${applicationId}`);
  };

  return (
    <div className="loanPage">
      <CardOverviewSection
        onScrollToForm={scrollToForm}
        onNavigate={navigateToStep}
      />
      <TabsSection />
      <StepsSection />
      <section ref={formRef}>
        <LoanApplicationFlow />
      </section>
    </div>
  );
};

export { LoanPage };
