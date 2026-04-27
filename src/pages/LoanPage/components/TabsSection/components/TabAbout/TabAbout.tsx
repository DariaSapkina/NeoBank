import { AboutCard } from "@/components";
import Bag_duotone from "@/assets/Bag_duotone.svg";
import Calendar_duotone from "@/assets/Calendar_duotone.svg";
import Clock_duotone from "@/assets/Clock_duotone.svg";
import Credit_card_duotone from "@/assets/Credit_card_duotone.svg";
import Money_duotone from "@/assets/Money_duotone.svg";
import "./TabAbout.scss";

const ABOUT_CARDS = [
  {
    id: 1,
    icon: Money_duotone,
    title: "Up to 50 000 ₽",
    description: "Cash and transfers without commission and percent",
  },
  {
    id: 2,
    icon: Calendar_duotone,
    title: "Up to 160 days",
    description: "Without percent on the loan",
  },
  {
    id: 3,
    icon: Clock_duotone,
    title: "Free delivery",
    description:
      "We will deliver your card by courier at a convenient place and time for you",
  },
  {
    id: 4,
    icon: Bag_duotone,
    title: "Up to 12 months",
    description:
      "No percent. For equipment, clothes and other purchases in installments",
  },
  {
    id: 5,
    icon: Credit_card_duotone,
    title: "Convenient deposit and withdrawal",
    description:
      "At any ATM. Top up your credit card for free with cash or transfer from other cards",
  },
];

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
