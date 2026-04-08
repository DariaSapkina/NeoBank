import {
  HeroSection,
  FeatureSection,
  ExchangeRateSection,
  CoverageSection,
  SubscribeSection,
} from "./components";
import "./HomePage.scss";

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
