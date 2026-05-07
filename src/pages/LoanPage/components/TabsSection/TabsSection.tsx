import { Tabs } from "@/components";
import type { ITab } from "@/types";
import { TabAbout, TabCashback, TabRates, TabFAQ } from "./components";

const TABS: ITab[] = [
  {
    id: 1,
    value: "about",
    label: "About card",
    content: <TabAbout />,
  },
  {
    id: 2,
    value: "rates",
    label: "Rates and conditions",
    content: <TabRates />,
  },
  {
    id: 3,
    value: "cashback",
    label: "Cashback",
    content: <TabCashback />,
  },
  {
    id: 4,
    value: "faq",
    label: "FAQ",
    content: <TabFAQ />,
  },
];

const TabsSection = () => {
  return <Tabs tabs={TABS} />
};

export { TabsSection };
