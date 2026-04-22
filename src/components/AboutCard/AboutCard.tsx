import type { FC } from "react";
import "./AboutCard.scss";

export interface IAboutCardProps {
  icon: string;
  title: string;
  description: string;
}

const AboutCard: FC<IAboutCardProps> = ({ icon, title, description }) => {
  return (
    <li className="aboutCard">
      <img className="aboutCard__icon" src={icon} alt="" />
      <h3 className="aboutCard__title">{title}</h3>
      <p className="aboutCard__description">{description}</p>
    </li>
  );
};

export { AboutCard };
