import { useState, type FC, type ReactNode } from "react";
import "./Tabs.scss";

export interface ITab {
  label: string;
  value: string;
  content: ReactNode;
}

interface ITabsProps {
  tabs: ITab[];
}

const Tabs: FC<ITabsProps> = ({ tabs }) => {
  const [tab, setTab] = useState(tabs[0]);

  return (
    <section className="tab">
      <ul className="tab__list">
        {tabs.map((item) => (
          <li
            key={item.value}
            className={`tab__listItem ${tab.value === item.value && "tab__listItem_active"}`}
          >
            <button
              className="tab__button"
              aria-label={`Open ${tab.label}`}
              onClick={() => setTab(item)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab__content">{tab.content}</div>
    </section>
  );
};

export { Tabs };
