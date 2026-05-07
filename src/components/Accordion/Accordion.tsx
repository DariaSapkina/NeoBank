import type { FC } from "react";
import type { IFAQ } from "@/types";
import "./Accordion.scss";

interface IAccordionProps {
  accordionData: IFAQ[];
  openId: string | null;
  handleToggle: (openId: string) => void;
};

const Accordion: FC<IAccordionProps> = ({
  accordionData,
  openId,
  handleToggle,
}) => {
  return (
    <ul className="accordion">
      {accordionData.map(({ id, title, content }) => (
        <li key={id} className="accordion__item">
          <button
            className={`accordion__title ${openId === id && "accordion__title_open"}`}
            aria-label={`Open: ${title}`}
            onClick={() => handleToggle(id)}
          >
            {title}
          </button>
          <div
            className={`accordion__collapse ${openId === id && "accordion__collapse_open"}`}
          >
            <p className="accordion__content">{content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export { Accordion };
