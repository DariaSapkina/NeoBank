import "./HomePage.scss";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { FeatureSection } from "./components/FeatureSection/FeatureSection";

const HomePage = () => {
  return (
    <div className="homePage">
      <HeroSection />
      <FeatureSection />
    </div>
  );
};

export { HomePage };
