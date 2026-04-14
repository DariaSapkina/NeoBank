import {
  HeroSection,
  FeatureSection,
  ExchangeRateSection,
  CoverageSection,
  SubscribeSection,
  SliderSection,
} from "./components";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <HeroSection />
      <FeatureSection />
      <ExchangeRateSection />
      <CoverageSection />
      <SliderSection />
      <SubscribeSection />
    </div>
  );
};

export { HomePage };
