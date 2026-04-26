import { Tabs, type ITab } from "@/components";
import { TabAbout, TabCashback, TabRates, TabFAQ } from "./components";
import "./TabsSection.scss";

const TABS: ITab[] = [
  {
    value: "about",
    label: "About card",
    content: <TabAbout />,
  },
  {
    value: "rates",
    label: "Rates and conditions",
    content: <TabRates />,
  },
  {
    value: "cashback",
    label: "Cashback",
    content: <TabCashback />,
  },
  {
    value: "faq",
    label: "FAQ",
    content: <TabFAQ />,
  },
];

const TabsSection = () => {
  return <Tabs tabs={TABS} />
};

export { TabsSection };
