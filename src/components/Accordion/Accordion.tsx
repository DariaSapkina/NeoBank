import { type FC } from "react";
import "./Accordion.scss";

export interface IFAQ {
  id: string;
  question: string;
  answer: string;
};

interface IAccordionProps {
  accordionData: IFAQ[];
  openId: string | null;
  handleToggel: (openId: string) => void;
};

const Accordion: FC<IAccordionProps> = ({
  accordionData,
  openId,
  handleToggel,
}) => {
  return (
    <ul className="accordion">
      {accordionData.map(({ id, question, answer }) => (
        <li key={id} className="accordion__item">
          <button
            className={`accordion__question ${openId === id && "accordion__question_open"}`}
            aria-label={`Open answer: ${question}`}
            onClick={() => handleToggel(id)}
          >
            {question}
          </button>
          <div
            className={`accordion__collapse ${openId === id && "accordion__collapse_open"}`}
          >
            <p className="accordion__answer">{answer}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export { Accordion };
