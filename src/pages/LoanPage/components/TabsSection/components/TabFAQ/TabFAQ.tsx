import { useState } from "react";
import { Accordion} from "@/components";
import { FAQ_SECTIONS } from "./tabFAQ.constants";
import "./TabFAQ.scss";

const TabFAQ = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <ul className="tabFAQ">
      {FAQ_SECTIONS.map(({ id, title, faq }) => (
        <li key={id} className="tabFAQ__item">
          <h2 className="tabFAQ__title">{title}</h2>
          <Accordion
            accordionData={faq}
            openId={openId}
            handleToggle={handleToggle}
          />
        </li>
      ))}
    </ul>
  );
};

export { TabFAQ };
