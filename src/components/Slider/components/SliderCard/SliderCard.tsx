import type { FC } from "react";
import { Link } from "react-router-dom";
import type { INews } from "@/types";
import "./SliderCard.scss";

interface ISliderCardProps extends INews {
  width: number;
};

const SliderCard: FC<ISliderCardProps> = ({
  title,
  description,
  url,
  urlToImage,
  width,
}) => {
  return (
    <article className="sliderCard" style={{ width: `${width}px` }}>
      <img className="sliderCard__img" src={urlToImage} alt={title} />
      <Link to={url} target="_blank">
        <h3 className="sliderCard__title">{title}</h3>
      </Link>
      <p className="sliderCard__description">{description}</p>
    </article>
  );
};

export { SliderCard };
