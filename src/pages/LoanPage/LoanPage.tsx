import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  CardOverviewSection,
  StepsSection,
  TabsSection,
  LoanApplicationFlow,
} from "./components";
import { getRouteByStep } from "@/utils";
import type { TRootState } from "@/store";
import "./LoanPage.scss";

const LoanPage = () => {
  const formRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const { currentStep } = useSelector((state: TRootState) => state.application);

  const navigateToStep = (applicationId: number | null) => {
    if (!applicationId) return null;
    navigate(`${getRouteByStep(currentStep, applicationId)}`);
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
