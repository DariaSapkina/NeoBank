import "./HomePage.scss";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { FeatureSection } from "./components/FeatureSection/FeatureSection";
import { ExchangeRateSection } from "./components/ExchangeRateSection/ExchangeRateSection";

const HomePage = () => {
  return (
    <div className="homePage">
      <HeroSection />
      <FeatureSection />
      <ExchangeRateSection />
    </div>
  );
};

export { HomePage };
