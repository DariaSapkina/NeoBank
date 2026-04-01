import "./HomePage.scss";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { FeatureSection } from "./components/FeatureSection/FeatureSection";
import { ExchangeRateSection } from "./components/ExchangeRateSection/ExchangeRateSection";
import { CoverageSection } from "./components/CoverageSection/CoverageSection";

const HomePage = () => {
  return (
    <div className="homePage">
      <HeroSection />
      <FeatureSection />
      <ExchangeRateSection />
      <CoverageSection />
    </div>
  );
};

export { HomePage };
