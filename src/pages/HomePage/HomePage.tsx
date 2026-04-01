import "./HomePage.scss";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { FeatureSection } from "./components/FeatureSection/FeatureSection";
import { ExchangeRateSection } from "./components/ExchangeRateSection/ExchangeRateSection";
import { CoverageSection } from "./components/CoverageSection/CoverageSection";
import { SubscribeSection } from "./components/SubscribeSection/SubscribeSection";

const HomePage = () => {
  return (
    <div className="homePage">
      <HeroSection />
      <FeatureSection />
      <ExchangeRateSection />
      <CoverageSection />
      <SubscribeSection />
    </div>
  );
};

export { HomePage };
