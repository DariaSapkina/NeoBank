import { AboutCard } from "@/components";
import { ABOUT_CARDS } from "./tabAbout.constants";
import "./TabAbout.scss";

const TabAbout = () => {
  return (
    <ul className="tabAbout">
      {ABOUT_CARDS.map(({ id, icon, title, description }) => (
        <AboutCard
          icon={icon}
          title={title}
          description={description}
          key={id}
        />
      ))}
    </ul>
  );
};

export { TabAbout };
